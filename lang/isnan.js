const und = require('underscore');
const lod = require('lodash');

/**
 * isNaN - проверяет является ли выражение NaN
 */

// lodash
console.log("lod.isNaN(NaN)", lod.isNaN(NaN));
console.log("lod.isNaN(new Number(NaN))", lod.isNaN(new Number(NaN)));
console.log("isNaN(undefined)", isNaN(undefined));
console.log("lod.isNaN(undefined)", lod.isNaN(undefined));

// es6
function isNotANumber(value) {
	if(value === undefined) return false;
	return isNaN(value);
}

console.log("isNotANumber(NaN)", isNotANumber(NaN));
console.log("isNotANumber(new Number(NaN))", isNotANumber(new Number(NaN)));
console.log("isNotANumber(undefined)", isNotANumber(undefined));