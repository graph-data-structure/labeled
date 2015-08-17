[js-graph-labeled](http://aureooms.github.io/js-graph-labeled)
==

Labeled graph code bricks for JavaScript.

```js
G.vadd( "A" ) ;
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-graph-labeled.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-graph-labeled/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-graph-labeled.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-graph-labeled)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-graph-labeled.svg?style=flat)](http://bower.io/search/?q=aureooms-js-graph-labeled)
[![Build Status](http://img.shields.io/travis/aureooms/js-graph-labeled.svg?style=flat)](https://travis-ci.org/aureooms/js-graph-labeled)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-graph-labeled.svg?style=flat)](https://coveralls.io/r/aureooms/js-graph-labeled)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-graph-labeled.svg?style=flat)](https://david-dm.org/aureooms/js-graph-labeled#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-graph-labeled.svg?style=flat)](https://david-dm.org/aureooms/js-graph-labeled#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-graph-labeled.svg?style=flat)](https://codeclimate.com/github/aureooms/js-graph-labeled)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-graph-labeled.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-graph-labeled)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-graph-labeled.svg?style=flat)](https://github.com/aureooms/js-graph-labeled/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-graph-labeled.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-graph-labeled)

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
jspm install npm:aureooms-js-graph-labeled
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-graph-labeled
```

### bower
```terminal
bower install aureooms-js-graph-labeled
```

### ender
```terminal
ender add aureooms-js-graph-labeled
```

### jam
```terminal
jam install aureooms-js-graph-labeled
```

### spm
```terminal
spm install aureooms-js-graph-labeled --save
```

### npm
```terminal
npm install aureooms-js-graph-labeled --save
```

## Require
### jspm
```js
let graphlabeled = require( "github:aureooms/js-graph-labeled" ) ;
// or
import graphlabeled from 'aureooms-js-graph-labeled' ;
```
### duo
```js
let graphlabeled = require( "aureooms/js-graph-labeled" ) ;
```

### component, ender, spm, npm
```js
let graphlabeled = require( "aureooms-js-graph-labeled" ) ;
```

### bower
The script tag exposes the global variable `graphlabeled`.
```html
<script src="bower_components/aureooms-js-graph-labeled/js/dist/graph-labeled.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-graph-labeled" ] , function ( graphlabeled ) { ... } ) ;
```
