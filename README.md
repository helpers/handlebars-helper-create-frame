# handlebars-helper-create-frame [![NPM version](https://img.shields.io/npm/v/handlebars-helper-create-frame.svg?style=flat)](https://www.npmjs.com/package/handlebars-helper-create-frame) [![NPM monthly downloads](https://img.shields.io/npm/dm/handlebars-helper-create-frame.svg?style=flat)](https://npmjs.org/package/handlebars-helper-create-frame)  [![NPM total downloads](https://img.shields.io/npm/dt/handlebars-helper-create-frame.svg?style=flat)](https://npmjs.org/package/handlebars-helper-create-frame) [![Linux Build Status](https://img.shields.io/travis/helpers/handlebars-helper-create-frame.svg?style=flat&label=Travis)](https://travis-ci.org/helpers/handlebars-helper-create-frame)

> Handlebars block helper for creating private variables that are accessible inside the block.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save handlebars-helper-create-frame
```

## Usage

Example for handlebars, but this should work for any template engine that takes helpers or filters.

```js
var handlebars = require('handlebars');

handlebars.registerHelper('frame', require('handlebars-helper-create-frame'));
var fn = handlebars.compile('{{#frame site=site}}Name: {{@site.name}}{{/frame}}');
console.log(fn({site: {name: 'Test'}}));
//=> 'Name: Test'
```

## About

### Related projects

* [handlebars-helpers](https://www.npmjs.com/package/handlebars-helpers): More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate… [more](https://github.com/assemble/handlebars-helpers) | [homepage](https://github.com/assemble/handlebars-helpers "More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate, Verb, Ghost, gulp-handlebars, grunt-handlebars, consolidate, or any node.js/Handlebars project.")
* [helper-geopattern](https://www.npmjs.com/package/helper-geopattern): Template helper for generating a geometric SVG pattern for CSS backgrounds using btmills/geopattern | [homepage](https://github.com/helpers/helper-geopattern "Template helper for generating a geometric SVG pattern for CSS backgrounds using btmills/geopattern")
* [helper-html-table](https://www.npmjs.com/package/helper-html-table): Create an HTML table from JSON configuration. | [homepage](https://github.com/helpers/helper-html-table "Create an HTML table from JSON configuration.")
* [helper-octicon](https://www.npmjs.com/package/helper-octicon): Template helper for displaying octicon SVGs. Should work with any Handlebars, Lo-Dash, underscore or any… [more](https://github.com/helpers/helper-octicon) | [homepage](https://github.com/helpers/helper-octicon "Template helper for displaying octicon SVGs. Should work with any Handlebars, Lo-Dash, underscore or any template engine that allows helper functions to be registered. Also compatible with verb, assemble, and templates.")
* [helper-uigradient](https://www.npmjs.com/package/helper-uigradient): Template helper that generates the CSS for any of the gradients from Ghosh/uiGradients | [homepage](https://github.com/helpers/helper-uigradient "Template helper that generates the CSS for any of the gradients from Ghosh/uiGradients")
* [template-helpers](https://www.npmjs.com/package/template-helpers): Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or… [more](https://github.com/jonschlinkert/template-helpers) | [homepage](https://github.com/jonschlinkert/template-helpers "Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or any engine that supports helper functions.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for avice on opening issues, pull requests, and coding standards.

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.3, on January 05, 2017._