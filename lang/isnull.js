const und = require('underscore');
const lod = require('lodash');

/**
 * isNull - проверяет является ли выражение null
 */

// underscore
console.log("und.isNull(null)", und.isNull(null));
console.log("und.isNull(void 0)", und.isNull(void 0));

// lodash
console.log("lod.isNull(null)", lod.isNull(null));
console.log("lod.isNull(void 0)", lod.isNull(void 0));

// es6
function isNull(value) {
	if(value === null) return true;
	return false;
}

console.log("isNull(null)", isNull(null));
console.log("isNull(void 0)", isNull(void 0));