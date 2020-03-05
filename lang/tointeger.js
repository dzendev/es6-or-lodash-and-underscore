const und = require('underscore');
const lod = require('lodash');

/**
 * toInteger - конвертирует значение в целое число.
 */

// lodash
console.log("lod.toInteger(3.2)", lod.toInteger(3.2));
console.log("lod.toInteger(Number.MIN_VALUE)", lod.toInteger(Number.MIN_VALUE));
console.log("lod.toInteger(Infinity)", lod.toInteger(Infinity));
console.log("lod.toInteger(-Infinity)", lod.toInteger(-Infinity));
console.log("lod.toInteger('3.2')", lod.toInteger('3.2'));
console.log("lod.toInteger(NaN)", lod.toInteger(NaN));

// es6
function toInteger(value) {
	if(isFinite(value)) {
		return parseInt(value);
	} else if(value === Infinity){
		return Number.MAX_VALUE;
	} else if(value === -Infinity){
		return Number.MIN_VALUE;
	} else {
		return 0;
	}
}

console.log("toInteger(3.2)", toInteger(3.2));
console.log("toInteger(Number.MIN_VALUE)", toInteger(Number.MIN_VALUE));
console.log("toInteger(Infinity)", toInteger(Infinity));
console.log("toInteger(-Infinity)", toInteger(-Infinity));
console.log("toInteger('3.2')", toInteger('3.2'));
console.log("toInteger(NaN)", toInteger(NaN));

