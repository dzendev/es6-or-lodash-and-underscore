const und = require('underscore');
const lod = require('lodash');

/**
 * lowerFirst - преобразует первый символ строки в нижний регистр
 */

// lodash
console.log("lod.lowerFirst('Fred')", lod.lowerFirst('Fred'));
console.log("lod.lowerFirst('FRED')", lod.lowerFirst('FRED'));

// es6
function lowerFirst(str) {
	return str[0].toLowerCase() + str.slice(1);
}

console.log("lowerFirst('Fred')", lowerFirst('Fred'));
console.log("lowerFirst('FRED')", lowerFirst('FRED'));
