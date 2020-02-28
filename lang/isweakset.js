const und = require('underscore');
const lod = require('lodash');

/**
 * isWeakMap - проверяет является ли выражение WeakSet
*/

// lodash
console.log("lod.isWeakSet(new WeakSet)", lod.isWeakSet(new WeakSet));
console.log("lod.isWeakSet(new Map)", lod.isWeakSet(new Map));

// es6
function isWeakSet(value) {
	if(Object.prototype.toString.call(value) === '[object WeakSet]') return true;
	return false;
}

console.log("isWeakSet(new WeakSet)", isWeakSet(new WeakSet));
console.log("isWeakSet(new Set)", isWeakSet(new Set));
