const und = require('underscore');
const lod = require('lodash');

/**
 * isSet - проверяет является ли выражение Set
*/

// lodash
console.log("lod.isSet(new Set)", lod.isSet(new Set));
console.log("lod.isSet(new WeakSet)", lod.isSet(new WeakSet));

// es6
function isSet(value) {
	if(Object.prototype.toString.call(value) === '[object Set]') return true;
	return false;
}

console.log("isSet(new Set)", isSet(new Set));
console.log("isSet(new WeakSet)", isSet(new WeakSet));
