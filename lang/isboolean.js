const und = require('underscore');
const lod = require('lodash');

/**
 * isBoolean - проверяет является ли выражение boolean
 */

// lodash
console.log("lod.isBoolean(false)", lod.isBoolean(false));
console.log("lod.isBoolean(null)", lod.isBoolean(null));

// es6
console.log("typeof false === 'boolean'", typeof false === 'boolean');
console.log("typeof null === 'boolean'", typeof null === 'boolean');
