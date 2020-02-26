const und = require('underscore');
const lod = require('lodash');

/**
 * isArray - проверяет является ли выражение Array
 */

// lodash
console.log("lod.isArray([1, 2, 3])", lod.isArray([1, 2, 3]));
console.log("lod.isArray('abc')", lod.isArray('abc'));

// es6
console.log("Array.isArray([1, 2, 3])", Array.isArray([1, 2, 3]));
console.log("Array.isArray('abc')", Array.isArray('abc'));
