[js-graph-labeled](http://make-github-pseudonymous-again.github.io/js-graph-labeled)
==

Labeled graph code bricks for JavaScript.

```js
G.vadd( "A" ) ;
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-graph-labeled.svg?style=flat)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-graph-labeled/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-graph-labeled.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-graph-labeled)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-graph-labeled.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-graph-labeled)
[![Build Status](https://img.shields.io/travis/make-github-pseudonymous-again/js-graph-labeled.svg?style=flat)](https://travis-ci.org/make-github-pseudonymous-again/js-graph-labeled)
[![Coverage Status](https://img.shields.io/coveralls/make-github-pseudonymous-again/js-graph-labeled.svg?style=flat)](https://coveralls.io/r/make-github-pseudonymous-again/js-graph-labeled)
[![Dependencies Status](https://img.shields.io/david/make-github-pseudonymous-again/js-graph-labeled.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-graph-labeled#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-graph-labeled.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-graph-labeled#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/make-github-pseudonymous-again/js-graph-labeled.svg?style=flat)](https://codeclimate.com/github/make-github-pseudonymous-again/js-graph-labeled)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-graph-labeled.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-graph-labeled)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-graph-labeled.svg?style=flat)](https://github.com/make-github-pseudonymous-again/js-graph-labeled/issues)
[![Inline docs](http://inch-ci.org/github/make-github-pseudonymous-again/js-graph-labeled.svg?branch=master&style=shields)](http://inch-ci.org/github/make-github-pseudonymous-again/js-graph-labeled)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-graph-labeled
# or
jspm install npm:@aureooms/js-graph-labeled
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-graph-labeled
```

### bower
```terminal
bower install @aureooms/js-graph-labeled
```

### ender
```terminal
ender add @aureooms/js-graph-labeled
```

### jam
```terminal
jam install @aureooms/js-graph-labeled
```

### spm
```terminal
spm install @aureooms/js-graph-labeled --save
```

### npm
```terminal
npm install @aureooms/js-graph-labeled --save
```

## Require
### jspm
```js
let graphlabeled = require( "github:aureooms/js-graph-labeled" ) ;
// or
import graphlabeled from '@aureooms/js-graph-labeled' ;
```
### duo
```js
let graphlabeled = require( "aureooms/js-graph-labeled" ) ;
```

### component, ender, spm, npm
```js
let graphlabeled = require( "@aureooms/js-graph-labeled" ) ;
```

### bower
The script tag exposes the global variable `graphlabeled`.
```html
<script src="bower_components/@aureooms/js-graph-labeled/js/dist/graph-labeled.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-graph-labeled" ] , function ( graphlabeled ) { ... } ) ;
```
