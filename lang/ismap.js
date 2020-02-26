const und = require('underscore');
const lod = require('lodash');

/**
 * isMap - проверяет является ли выражение Map
 */

// lodash
console.log("lod.isMap(new Map)", lod.isMap(new Map));
console.log("lod.isMap(new WeakMap)", lod.isMap(new WeakMap));

// es6
function isMap(value) {
	if(Object.prototype.toString.call(value) === '[object Map]') return true;
	return false;
}

console.log("isMap(new Map)", isMap(new Map));
console.log("isMap(WeakMap)", isMap(WeakMap));