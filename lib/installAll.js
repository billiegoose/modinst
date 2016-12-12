'use strict'
const fs = require('fs')
const os = require('os')
const sh = require('shelljs')
const path = require('path')
const watt = require('watt')
const Package = require('nice-package')
const cmdShim = require('cmd-shim')

module.exports = watt(function * ({head, store}, next) {
  let headPath = path.join(os.homedir(), '.store', 'v1', 'node_modules', head.scope, head.name)
  let binDir = path.join(os.homedir(), '.store', 'v1', 'node_modules', '.bin')
  // Install top level module
  linkify(headPath, head, 32)
  // Install any CLI programs
  // get the package.json
  let fileContents = yield fs.readFile(path.join(headPath, 'package.json'), 'utf8', next)
  let json = JSON.parse(fileContents)
  let pkg = new Package(json)
  for (let cmd in pkg.bin) {
    console.log(`${path.join(binDir, cmd)} -> ${path.join(headPath, pkg.bin[cmd])}`)
    // link({from: path.join(binDir, cmd), to: path.join(head.extractPath, pkg.bin[cmd])})
    yield cmdShim(path.join(headPath, pkg.bin[cmd]), path.join(binDir, cmd), next)
  }
})

function linkify (dir, m, depth) {
  if (depth === 0) return
  if (m.dependencies.length > 0) {
    // Create adjacent node modules directory
    let depDir = dir + '+node_modules'
    sh.mkdir('-p', depDir)
    // Recursively fill it with dependencies
    for (let d of m.linkedDependencies) {
      // TODO: We need some kind of way to prevent cyclic dependencies unrolling into infinite depth trees
      linkify(path.join(depDir, d.scope, d.name), d, depth - 1)
    }
  }
  // Do this last, so this links presence is an atomic guarantee it is installed.
  link({from: dir, to: m.extractPath})
}

function link ({from, to}) {
  sh.mkdir('-p', path.dirname(from))
  console.log(from)
  let captureout = sh.ln('-sf', to, from)
  if (sh.error()) throw new Error('symlink error: ' + captureout)
}
