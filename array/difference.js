const und = require('underscore');
const lod = require('lodash');

/**
 * difference - возвращает массив значений из первого массива,
 * которые отсутствуют во втором массиве
 * _.difference([2, 1], [2, 3]) -> 1
 */

// underscore
console.log("und.difference([2, 1], [2, 3])", und.difference([2, 1], [2, 3]));

// lodash
console.log("lod.difference([2, 1], [2, 3])", lod.difference([2, 1], [2, 3]));

// es6
function difference(arr, value) {
	return arr.filter(function(elem) {
		return value.indexOf(elem) == -1;
	});
}

console.log("difference([2, 1], [2, 3])", difference([2, 1], [2, 3]));

