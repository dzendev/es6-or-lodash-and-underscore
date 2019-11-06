const und = require('underscore');
const lod = require('lodash');

/**
 * bind - привзяка контекста
 */

function greet(greeting) {
  return greeting + ' ' + this.user;
}
var object = { 'user': 'Fred' };

// underscore
console.log("und.bind(greet, object, 'hi')()", und.bind(greet, object, 'hi')());

// lodash

console.log("lod.bind(greet, object, 'hi')()", lod.bind(greet, object, 'hi')());

// es6
console.log("greet.call(object, 'hi')", greet.call(object, 'hi'));
console.log("greet.bind(object)('hi')", greet.bind(object)('hi'));