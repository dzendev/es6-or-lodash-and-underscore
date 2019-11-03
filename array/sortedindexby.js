const und = require('underscore');
const lod = require('lodash');

/**
 * sortedIndexBy -индекс искомого объекта в отсортированном массиве
 * _.sortedIndexBy([{'x': 3}, {'x': 4}, {'x': 5}], {'x': 4}, 'x') -> 1
 */

// lodash
console.log("lod.sortedIndexBy([{'x': 3}, {'x': 4}, {'x': 5}], {'x': 4}, 'x')", lod.sortedIndexBy([{'x': 3}, {'x': 4}, {'x': 5}], {'x': 4}, 'x'));

// es6
function objectIndexByFun(arr, value, prop) {
	return arr.findIndex(elem => elem[prop] == value[prop]);
}

console.log("objectIndexByFun([{'x': 3}, {'x': 4}, {'x': 5}], {'x': 4}, 'x')", objectIndexByFun([{'x': 3}, {'x': 4}, {'x': 5}], {'x': 4}, 'x'));