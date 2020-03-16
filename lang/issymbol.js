const und = require('underscore');
const lod = require('lodash');

/**
 * isSymbol - проверяет является ли выражение Symbol
 */

// lodash
console.log("lod.isSymbol(Symbol.iterator)", lod.isSymbol(Symbol.iterator));
console.log("lod.isSymbol('abc')", lod.isSymbol('abc'));

// es6
function isSymbol(value) {
	if(Object.prototype.toString.call(value) === '[object Symbol]') return true;
	return false;
}

console.log("isSymbol(Symbol.iterator)", isSymbol(Symbol.iterator));
console.log("isSymbol('abc')", isSymbol('abc'));