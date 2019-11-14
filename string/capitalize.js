const und = require('underscore');
const lod = require('lodash');

/**
 * capitalize - преобразует строку в нижний регистр, первый символ в верхний
 */

// lodash
console.log("lod.capitalize('FRED')", lod.capitalize('FRED'));

// es6
function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log("capitalize('FRED')", capitalize('FRED'));
