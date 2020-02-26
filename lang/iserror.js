const und = require('underscore');
const lod = require('lodash');

/**
 * isError - проверяет является ли выражение объектом Error
 */

// lodash
console.log("lod.isError(new Error)", lod.isError(new Error));
console.log("lod.isError(Error)", lod.isError(Error));

// es6
function isError(value) {
	if(Object.prototype.toString.call(value) === '[object Error]') return true;
	return false;
}

console.log("isError(new Error)", isError(new Error));
console.log("isError(Error)", isError(Error));
