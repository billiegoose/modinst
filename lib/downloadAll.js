'use strict'
const watt = require('watt')
const observatory = require('observatory')
const Bottleneck = require('bottleneck')
const limiter = new Bottleneck()
const sha = require('sha')
const decompress = require('decompress')
const download = require('./download')

module.exports = watt(function * ({store}, next) {
  observatory.settings({
    prefix: '[DOWNLOAD] '
  })
  for (let m of store.values()) {
    limiter.submit(downloadPackage, Task(m), null)
  }
  yield limiter.on('idle', () => next())
})

module.exports.changeSettings = function ({maxConcurrent, minTime, highWater, strategy}) {
  limiter.changeSettings(maxConcurrent, minTime, highWater, strategy)
}

const Task = function (m) {
  let task = {}
  task.m = m
  task.task = observatory.add(m.fnv)
  task.task.status('queued').details(m.tarball.sha)
  return task
}

const downloadPackage = watt(function * ({task, m}, next) {
  task.status('downloading')
  yield download(m.tarball.url, m.tarballPath)
  task.status('verifying')
  // Verify
  yield sha.check(m.tarballPath, m.tarball.sha, next)
  // Extract
  task.status('extracting').details(m.extractPath)
  yield decompress(m.tarballPath, m.extractPath, {
    map: file => {
      file.path = file.path.replace(/^package/, '')
      return file
    }
  })
  task.done('extracted')
})
