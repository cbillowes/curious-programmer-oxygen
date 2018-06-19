<div align="center">
    <img src="static/logos/oxygen.png" alt="Logo" width='150px' height='150px'/>
</div>

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/cbillowes/curious-programmer-oxygen/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/cbillowes/curious-programmer-oxygen.svg?branch=master)](https://travis-ci.org/cbillowes/curious-programmer-oxygen.svg?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/00ba1fed9223c420b5f5/maintainability)](https://codeclimate.com/github/cbillowes/curious-programmer-oxygen/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/00ba1fed9223c420b5f5/test_coverage)](https://codeclimate.com/github/cbillowes/curious-programmer-oxygen/test_coverage)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1d020d15c27c4121827612f6fcf19811)](https://www.codacy.com/app/cbillowes/curious-programmer-oxygen?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cbillowes/curious-programmer-oxygen&amp;utm_campaign=Badge_Grade)
[![Twitter Follow](https://img.shields.io/twitter/follow/cbillowes.svg?style=social)](https://twitter.com/cbillowes)

# Curious Programmer

* **v 1.0 - Codename Oxygen:** The birth of the curious programmer from the legacy of corporate programmer.

* **Theme:** All things curious, but what exactly is yet to be discovered with time.

* **Migration:** From Jekyll to Gatsby.js to to dabble in some Webpack and React.



## Resources

* [gatsby-advanced-starter](https://github.com/Vagr9K/gatsby-advanced-starter)

* [Oxygen Logo](https://seeklogo.com/vector-logo/329229/oxygen)



## Gremlins

* **Clean** the crap out of it to get out a gremlin or two
  * `sudo rm yarn.lock && sudo rm package-lock.json`
  * `yarn cache clean` || `sudo rm -rf .cache`
  * `sudo rm -rf node_modules && sudo yarn install`
  * `gatsby develop` || `yarn dev`
  * `rm -rf ./.cache && rm -rf ./.node_modules && yarn install && yarn dev`
* Hot Reloading stopped working
  * `sudo rm -rf .cache`
  * Cleaning steps
  * Run on a different freaking port :'(
    `sudo gatsby develop --host localhost --port 14789`

* Permission denied trying to install **lovell/sharp-libvips**

```shell
info sharp Downloading https://github.com/lovell/sharp-libvips/releases/download/v8.6.1/libvips-8.6.1-linux-x64.tar.gz
events.js:167
      throw er; // Unhandled 'error' event

EACCES: permission denied, open '/home/<directory>/node_modules/sharp/10298-libvips-8.6.1-linux-x64.tar.gz'
```

  * `sudo npm install -g node-gyp`
  * `sudo yarn upgrade-interactive` > **gatsby** package
  * `sudo npm i libvips --unsafe-perm=true --allow-root`
  * `sudo npm install --unsafe-perm=true --allow-root`
  * Cleaning steps


```log
50728 silly lifecycle   '(node install/libvips && node install/dll-copy && prebuild-install) || (node-gyp rebuild && node install/dll-copy)' ]
50729 silly lifecycle sharp@0.20.1~install: Returned: code: 1  signal: null
50730 info lifecycle sharp@0.20.1~install: Failed to exec install script
```

## MIT License

Copyright (c) 2018 Curious Programmer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.