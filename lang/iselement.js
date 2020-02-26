const und = require('underscore');
const lod = require('lodash');

/**
 * isElement - проверяет является ли выражение DOM element
 */

// lodash
console.log("lod.isElement(document.body)", lod.isElement(document.body));
console.log("lod.isElement('<body>')", lod.isElement('<body>'));

// es6
function isElement(value) {
	if(value.nodeType === 1) return true;
	return false;
}

console.log("isElement(document.body)", isElement(document.body));
console.log("isElement('<body>')", isElement('<body>'));