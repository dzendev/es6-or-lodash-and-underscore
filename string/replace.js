const und = require('underscore');
const lod = require('lodash');

/**
 * replace - заменяет совпадение в строке на другую строку
 */

// lodash
console.log("lod.replace('Hi Fred', 'Fred', 'Barney')", lod.replace('Hi Fred', 'Fred', 'Barney'));

// es6
console.log("'Hi Fred'.replace('Fred', 'Barney')", 'Hi Fred'.replace('Fred', 'Barney'));