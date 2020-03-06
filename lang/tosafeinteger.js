const und = require('underscore');
const lod = require('lodash');

/**
 * toSafeIntege - конвертирует объект в новый, но со свойствами прототипа
 */

// lodash
console.log("lod.toSafeInteger(3.2)", lod.toSafeInteger(3.2));
console.log("lod.toSafeInteger(Number.MIN_VALUE)", lod.toSafeInteger(Number.MIN_VALUE));
console.log("lod.toSafeInteger(Infinity)", lod.toSafeInteger(Infinity));
console.log("lod.toSafeInteger(-Infinity)", lod.toSafeInteger(-Infinity));
console.log("lod.toSafeInteger('3.2')", lod.toSafeInteger('3.2'));

// es6
function toSafeInteger(value) {
	if(value === Infinity) {
		return Number.MAX_SAFE_INTEGER;
	}
	if(value === -Infinity) {
		return Number.MIN_SAFE_INTEGER;
	}
	value = parseInt(value);
	if(Number.isSafeInteger(value)) return value;
	return value;
}

console.log("toSafeInteger(3.2)", toSafeInteger(3.2));
console.log("toSafeInteger(Number.MIN_VALUE)", toSafeInteger(Number.MIN_VALUE));
console.log("toSafeInteger(Infinity)", toSafeInteger(Infinity));
console.log("toSafeInteger(-Infinity)", toSafeInteger(-Infinity));
console.log("toSafeInteger('3.2')", toSafeInteger('3.2'));

