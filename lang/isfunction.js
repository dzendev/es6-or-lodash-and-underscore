const und = require('underscore');
const lod = require('lodash');

/**
 * isFunction - проверяет является ли выражение function
 */

// lodash
console.log("lod.isFunction(lod)", lod.isFunction(lod));
console.log("lod.isFunction(/abc/)", lod.isFunction(/abc/));
console.log("lod.isFunction(String)", lod.isFunction(String));

// es6
console.log("typeof lod === 'function'", typeof lod === 'function');
console.log("typeof /abc/ === 'function'", typeof /abc/ === 'function');
console.log("typeof String === 'function'", typeof String === 'function');