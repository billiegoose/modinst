<!-- TITLE/ -->

<h1>modinst</h1>

<!-- /TITLE -->


<!-- BADGES/ -->



<!-- /BADGES -->


<!-- DESCRIPTION/ -->

A highly experimental alternative module installer

<!-- /DESCRIPTION -->


## Installation

You can install this module normally using `npm`.

```sh
npm install --global modinst
```

## Usage

Download and compile the [Symlinks Just Work](https://github.com/rstacruz/pnpm/issues/496#issuecomment-266301933) branch of node, if you haven't already.

```sh
git clone --branch v7.2.0-sjw https://github.com/zkochan/node
```

Be sure to set your path and environment correctly to enable its features.

```
# ~/.bashrc
# Note, I'm using git-bash on windows... adjust paths accordingly.
export PATH="/c/NodeJSSourceCode/node/Release/:$HOME/.store/v1/node_modules/.bin:$PATH"
export NODE_SUPPORT_SYMLINKS=1
```

For now, I will just provide an example:

TODO: embed asciinema demo
EDIT: damn, asciinema no me gusta Windows.

```bash
$ echo $NODE_SUPPORT_SYMLINKS
1

$ node -v
v7.2.0-sjw

$ ls ~/.store
No such file or directory

$ npm i -g modinst

$ mi http-server/*
[RESOLVER] http-server/*                                   v0.9.0
[RESOLVER] colors/1.0.3                                    v1.0.3
[RESOLVER] corser/~2.0.0                                   v2.0.1
[RESOLVER] ecstatic/^1.4.0                                 v1.4.1
[RESOLVER] http-proxy/^1.8.1                              v1.16.2
[RESOLVER] opener/~1.4.0                                   v1.4.2
[RESOLVER] optimist/0.6.x                                  v0.6.1
[RESOLVER] portfinder/0.4.x                                v0.4.0
[RESOLVER] union/~0.4.3                                    v0.4.6
[RESOLVER] he/^0.5.0                                       v0.5.0
[RESOLVER] mime/^1.2.11                                    v1.3.4
[RESOLVER] minimist/^1.1.0                                 v1.2.0
[RESOLVER] url-join/^1.0.0                                 v1.1.0
[RESOLVER] eventemitter3/1.x.x                             v1.2.0
[RESOLVER] requires-port/1.x.x                             v1.0.0
[RESOLVER] minimist/~0.0.1                                v0.0.10
[RESOLVER] wordwrap/~0.0.2                                 v0.0.3
[RESOLVER] async/0.9.0                                     v0.9.0
[RESOLVER] mkdirp/0.5.x                                    v0.5.1
[RESOLVER] qs/~2.3.3                                       v2.3.3
[RESOLVER] minimist/0.0.8                                  v0.0.8
http-server 0.9.0
├─ async 0.9.0
├─ colors 1.0.3
├─ corser 2.0.1
├─ ecstatic 1.4.1
│  ├─ he ^0.5.0 => 0.5.0
│  ├─ mime ^1.2.11 => 1.3.4
│  ├─ minimist ^1.1.0 => 1.2.0
│  └─ url-join ^1.0.0 => 1.1.0
├─ eventemitter3 1.2.0
├─ he 0.5.0
├─ http-proxy 1.16.2
│  ├─ eventemitter3 1.x.x => 1.2.0
│  └─ requires-port 1.x.x => 1.0.0
├─ http-server 0.9.0
│  ├─ colors 1.0.3 => 1.0.3
│  ├─ corser ~2.0.0 => 2.0.1
│  ├─ ecstatic ^1.4.0 => 1.4.1
│  ├─ http-proxy ^1.8.1 => 1.16.2
│  ├─ opener ~1.4.0 => 1.4.2
│  ├─ optimist 0.6.x => 0.6.1
│  ├─ portfinder 0.4.x => 0.4.0
│  └─ union ~0.4.3 => 0.4.6
├─ mime 1.3.4
├─ minimist 0.0.8
├─ minimist 0.0.10
├─ minimist 1.2.0
├─ mkdirp 0.5.1
│  └─ minimist 0.0.8 => 0.0.8
├─ opener 1.4.2
├─ optimist 0.6.1
│  ├─ minimist ~0.0.1 => 0.0.10
│  └─ wordwrap ~0.0.2 => 0.0.3
├─ portfinder 0.4.0
│  ├─ async 0.9.0 => 0.9.0
│  └─ mkdirp 0.5.x => 0.5.1
├─ qs 2.3.3
├─ requires-port 1.0.0
├─ union 0.4.6
│  └─ qs ~2.3.3 => 2.3.3
├─ url-join 1.1.0
└─ wordwrap 0.0.3

http-server@0.9.0 depends directly on 8 packages and on 21 packages total:

async 0.9.0          ecstatic 1.4.1       http-proxy 1.16.2    minimist 0.0.10      mkdirp 0.5.1         portfinder 0.4.0     union 0.4.6
colors 1.0.3         eventemitter3 1.2.0  http-server 0.9.0    minimist 0.0.8       opener 1.4.2         qs 2.3.3             url-join 1.1.0
corser 2.0.1         he 0.5.0             mime 1.3.4           minimist 1.2.0       optimist 0.6.1       requires-port 1.0.0  wordwrap 0.0.3

[DOWNLOAD] http-server/0.9.0                            extracted C:\Users\Will\.store\v1\registry.npmjs.org\http-server\0.9.0\http-server
[DOWNLOAD] colors/1.0.3                                 extracted C:\Users\Will\.store\v1\registry.npmjs.org\colors\1.0.3\colors
[DOWNLOAD] corser/2.0.1                                 extracted C:\Users\Will\.store\v1\registry.npmjs.org\corser\2.0.1\corser
[DOWNLOAD] ecstatic/1.4.1                               extracted C:\Users\Will\.store\v1\registry.npmjs.org\ecstatic\1.4.1\ecstatic
[DOWNLOAD] http-proxy/1.16.2                            extracted C:\Users\Will\.store\v1\registry.npmjs.org\http-proxy\1.16.2\http-proxy
[DOWNLOAD] opener/1.4.2                                 extracted C:\Users\Will\.store\v1\registry.npmjs.org\opener\1.4.2\opener
[DOWNLOAD] portfinder/0.4.0                             extracted C:\Users\Will\.store\v1\registry.npmjs.org\portfinder\0.4.0\portfinder
[DOWNLOAD] optimist/0.6.1                               extracted C:\Users\Will\.store\v1\registry.npmjs.org\optimist\0.6.1\optimist
[DOWNLOAD] union/0.4.6                                  extracted C:\Users\Will\.store\v1\registry.npmjs.org\union\0.4.6\union
[DOWNLOAD] he/0.5.0                                     extracted C:\Users\Will\.store\v1\registry.npmjs.org\he\0.5.0\he
[DOWNLOAD] minimist/1.2.0                               extracted C:\Users\Will\.store\v1\registry.npmjs.org\minimist\1.2.0\minimist
[DOWNLOAD] mime/1.3.4                                   extracted C:\Users\Will\.store\v1\registry.npmjs.org\mime\1.3.4\mime
[DOWNLOAD] eventemitter3/1.2.0                          extracted C:\Users\Will\.store\v1\registry.npmjs.org\eventemitter3\1.2.0\eventemitter3
[DOWNLOAD] url-join/1.1.0                               extracted C:\Users\Will\.store\v1\registry.npmjs.org\url-join\1.1.0\url-join
[DOWNLOAD] minimist/0.0.10                              extracted C:\Users\Will\.store\v1\registry.npmjs.org\minimist\0.0.10\minimist
[DOWNLOAD] requires-port/1.0.0                          extracted C:\Users\Will\.store\v1\registry.npmjs.org\requires-port\1.0.0\requires-port
[DOWNLOAD] async/0.9.0                                  extracted C:\Users\Will\.store\v1\registry.npmjs.org\async\0.9.0\async
[DOWNLOAD] wordwrap/0.0.3                               extracted C:\Users\Will\.store\v1\registry.npmjs.org\wordwrap\0.0.3\wordwrap
[DOWNLOAD] qs/2.3.3                                     extracted C:\Users\Will\.store\v1\registry.npmjs.org\qs\2.3.3\qs
[DOWNLOAD] mkdirp/0.5.1                                 extracted C:\Users\Will\.store\v1\registry.npmjs.org\mkdirp\0.5.1\mkdirp
[DOWNLOAD] minimist/0.0.8                               extracted C:\Users\Will\.store\v1\registry.npmjs.org\minimist\0.0.8\minimist

Creating symlinks...
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\colors
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\corser
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\ecstatic+node_modules\he
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\ecstatic+node_modules\mime
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\ecstatic+node_modules\minimist
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\ecstatic+node_modules\url-join
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\ecstatic
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\http-proxy+node_modules\eventemitter3
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\http-proxy+node_modules\requires-port
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\http-proxy
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\opener
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\optimist+node_modules\minimist
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\optimist+node_modules\wordwrap
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\optimist
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\portfinder+node_modules\async
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\portfinder+node_modules\mkdirp+node_modules\minimist
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\portfinder+node_modules\mkdirp
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\portfinder
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\union+node_modules\qs
C:\Users\Will\.store\v1\node_modules\http-server+node_modules\union
C:\Users\Will\.store\v1\node_modules\http-server
C:\Users\Will\.store\v1\node_modules\.bin\http-server -> C:\Users\Will\.store\v1\node_modules\http-server\bin\http-server
C:\Users\Will\.store\v1\node_modules\.bin\hs -> C:\Users\Will\.store\v1\node_modules\http-server\bin\http-server

Operation completed, or an error happened.

$ which http-server
/c/Users/Will/.store/v1/node_modules/.bin/http-server

$ http-server
Starting up http-server, serving ./
Available on:
  http://192.168.1.119:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```

## Tests

Tests presuppose that you know what to expect. I really don't know what to expect. Things could change dramatically.

<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; William Hilton</li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/Unlicense.html">The Unlicense</a></li></ul>

<!-- /LICENSE -->


_Parts of this file are based on [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_

_README.md (and other files) are maintained using [mos](https://github.com/mosjs/mos) and [projectz](https://github.com/bevry/projectz)_
