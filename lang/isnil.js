const und = require('underscore');
const lod = require('lodash');

/**
 * isNil - проверяет является ли выражение null
 */

// lodash
console.log("lod.isNil(null)", lod.isNil(null));
console.log("lod.isNil(void 0)", lod.isNil(void 0));
console.log("lod.isNil(NaN)", lod.isNil(NaN));

// es6
function isNil(value) {
	if(value == null) return true;
	return false;
}

console.log("isNil(null)", isNil(null));
console.log("isNil(void 0)", isNil(void 0));
console.log("isNil(NaN)", isNil(NaN));
