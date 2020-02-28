const und = require('underscore');
const lod = require('lodash');

/**
 * isObject - проверяет является ли выражение object
 */

// lodash
console.log("lod.isObject({})", lod.isObject({}));
console.log("lod.isObject([1, 2, 3])", lod.isObject([1, 2, 3]));
console.log("lod.isObject(lod.noop)", lod.isObject(lod.noop));
console.log("lod.isObject(null)", lod.isObject(null));

// es6
function isObject(value) {
	return typeof value && value !== null;
}

console.log("isObject({})", isObject({}));
console.log("isObject([1, 2, 3])", isObject([1, 2, 3]));
console.log("isObject(lod.noop)", isObject(lod.noop));
console.log("isObject(null)", isObject(null));
