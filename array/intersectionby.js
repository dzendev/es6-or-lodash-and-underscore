const und = require('underscore');
const lod = require('lodash');

/**
 * intersectionBy - возвращает массив значений из первого массива,
 * которые присутствуют во втором массиве
 * _.intersectionBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x) -> [ { x: 1 } ]
 */

// lodash
console.log("lod.intersectionBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x')", lod.intersectionBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x'));
console.log("lod.intersectionBy([{'x':2}, {'x':1}, {'x':3}, {'y':1}], [{'x':1}, {'x':2}], 'x')", lod.intersectionBy([{'x':2}, {'x':1}, {'x':3}, {'y':1}], [{'x':1}, {'x':2}], 'x'));

// es6
function intersectionBy(arr, value, comprator) {
	return arr.filter(function(elem) {
		return value.find(function(item) {
			return item[comprator] === elem[comprator];
		});
	});
}

console.log("intersectionBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x')", intersectionBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x'));
console.log("intersectionBy([{'x':2}, {'x':1}, {'x':3}, {'y':1}], [{'x':1}, {'x':2}], 'x')", intersectionBy([{'x':2}, {'x':1}, {'x':3}, {'y':1}], [{'x':1}, {'x':2}], 'x'));
