const und = require('underscore');
const lod = require('lodash');

/**
 * toFinite - конвертирует значение в конечное число.
 */

// lodash
console.log("lod.toFinite(3.2)", lod.toFinite(3.2));
console.log("lod.toFinite(Number.MIN_VALUE)", lod.toFinite(Number.MIN_VALUE));
console.log("lod.toFinite(Infinity)", lod.toFinite(Infinity));
console.log("lod.toFinite(-Infinity)", lod.toFinite(-Infinity));
console.log("lod.toFinite('3.2')", lod.toFinite('3.2'));

// es6
function toFinite(value) {
	if(isFinite(value)) {
		return parseFloat(value);
	} else if(value === Infinity){
		return Number.MAX_VALUE;
	} else {
		return Number.MIN_VALUE;
	}
}

console.log("toFinite(3.2)", toFinite(3.2));
console.log("toFinite(Number.MIN_VALUE)", toFinite(Number.MIN_VALUE));
console.log("toFinite(Infinity)", toFinite(Infinity));
console.log("toFinite(-Infinity)", toFinite(-Infinity));
console.log("toFinite('3.2')", toFinite('3.2'));

