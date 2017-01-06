'use strict';

require('mocha');
var assert = require('assert');
var handlebars = require('handlebars');
var helper = require('..');

describe('handlebars-helper-create-frame', function() {
  it('should work as a handlebars helper', function() {
    handlebars.registerHelper('frame', helper);
    var fn = handlebars.compile('{{#frame site=site}}Name: {{@site.name}}{{/frame}}');
    assert.equal(fn({site: {name: 'Test'}}), 'Name: Test');
  });
});
