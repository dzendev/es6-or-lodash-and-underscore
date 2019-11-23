const und = require('underscore');
const lod = require('lodash');

/**
 * upperFirst - преобразует первый символ строки в верхний регистр
 */

// lodash
lod.upperFirst('fred');
lod.upperFirst('FRED');

// es6
function upperFirst(str) {
	return str[0].toUpperCase() + str.slice(1);
}

console.log("upperFirst('Fred')", upperFirst('Fred'));
console.log("upperFirst('FRED')", upperFirst('FRED'));
