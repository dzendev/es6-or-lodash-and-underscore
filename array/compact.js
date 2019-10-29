const und = require('underscore');
const lod = require('lodash');

/**
 * compact - Убирает из массива пустые элементы
 * _.compact([0, 1, false, 2, '', 3, undefined, null, NaN]) -> [1, 2, 3]
 */

const arr = [0, 1, false, 2, '', 3, undefined, null, NaN];

// underscore
console.log("und.compact(arr)", und.compact(arr));

// lodash
console.log("lod.compact(arr)", lod.compact(arr));

// es6
function compact(arr) {
	return arr.filter(elem => Boolean(elem) != false);
}
console.log("compact(arr)", compact(arr));