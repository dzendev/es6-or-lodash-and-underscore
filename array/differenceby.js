const und = require('underscore');
const lod = require('lodash');

/**
 * differenceBy - возвращает массив значений из первого массива,
 * которые отсутствуют во втором массиве
 * _.differenceBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x) -> [ { x: 2 } ]
 */

// lodash
console.log("lod.differenceBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x')", lod.differenceBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x'));
console.log("lod.differenceBy([{'x':2}, {'x':1}, {'x':3}, {'y':1}], [{'x':1}, {'x':2}], 'x')", lod.differenceBy([{'x':2}, {'x':1}, {'x':3}, {'y':1}], [{'x':1}, {'x':2}], 'x'));

// es6
function differenceBy(arr, value, comprator) {
	return arr.filter(function(elem) {
		return !value.find(function(item) {
			return item[comprator] === elem[comprator];
		});
	});
}

// function differenceBy(arr, value, comprator) {
// 	let arrValue = value.map(function(elem) {
// 		return JSON.stringify(elem);
// 	});

// 	return arr.filter(function(elem) {
// 		return arrValue.indexOf(JSON.stringify(elem)) == -1;
// 	});
// }

console.log("differenceBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x')", differenceBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x'));
console.log("differenceBy([{'x':2}, {'x':1}, {'x':3}, {'y':1}], [{'x':1}, {'x':2}], 'x')", differenceBy([{'x':2}, {'x':1}, {'x':3}, {'y':1}], [{'x':1}, {'x':2}], 'x'));
