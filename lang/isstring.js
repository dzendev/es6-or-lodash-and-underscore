const und = require('underscore');
const lod = require('lodash');

/**
 * isString - проверяет является ли выражение string
 */

// lodash
console.log("lod.isString('abc')", lod.isString('abc'));
console.log("lod.isString(1)", lod.isString(1));

// es6
console.log("typeof 'abc' === 'string'", typeof 'abc' === 'string');
console.log("typeof 1 === 'string'", typeof 1 === 'string');