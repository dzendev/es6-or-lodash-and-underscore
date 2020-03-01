const und = require('underscore');
const lod = require('lodash');

/**
 * toString - возвращает строку, представляющую объект.
 */

// lodash
console.log("lod.toString(null)", lod.toString(null));
console.log("lod.toString(undefined)", lod.toString(undefined));
console.log("lod.toString([1, 2, 3])", lod.toString([1, 2, 3]));
console.log("lod.toString('text')", lod.toString('text'));

// es6
function toString(value) {
	// return Object.prototype.toString.call(value);

	// undefined and null
	if(value == null) {
		return '';
	}
	return (value).toString();
}

console.log("toString(null)", toString(null));
console.log("toString(undefined)", toString(undefined));
console.log("toString([1, 2, 3])", toString([1, 2, 3]));
console.log("toString('text')", toString('text'));
