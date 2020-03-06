const und = require('underscore');
const lod = require('lodash');

/**
 * isArrayBuffer - проверяет является ли выражение ArrayBuffer.
 */

// lodash
console.log("lod.isArrayBuffer(new ArrayBuffer(2))", lod.isArrayBuffer(new ArrayBuffer(2)));
console.log("lod.isArrayBuffer(new Array(2))", lod.isArrayBuffer(new Array(2)));

// es6
function isArrayBuffer(arg) {
	if(Object.prototype.toString.call(arg) === '[object ArrayBuffer]') return true;
	else return false;
}

console.log("isArrayBuffer(new ArrayBuffer(2))", isArrayBuffer(new ArrayBuffer(2)));
console.log("isArrayBuffer(new Array(2))", isArrayBuffer(new Array(2)));
