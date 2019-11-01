const und = require('underscore');
const lod = require('lodash');

/**
 * pullAll - удаление совпадений в массиве
 * _.pullAll([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }], [{ 'x': 1 }, { 'x': 3 }], 'x') -> [ { x: 2 } ]
 */

// lodash
var arr = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

console.log(`lod.pullAllBy(arr, [{ 'x': 1 }, { 'x': 3 }], 'x')`,
	lod.pullAllBy(arr, [{ 'x': 1 }, { 'x': 3 }], 'x'));

// es6
function pullAllBy(arr, value, comprator) {
	// value.forEach(val => {
	// 	arr = arr.filter(elem => JSON.stringify(val) != JSON.stringify(elem));
	// });
	// return arr;
	return arr.filter(function(elem) {
		return !value.find(function(item) {
			return item[comprator] === elem[comprator];
		});
	});
}

console.log(`pullAllBy(arr, [{ 'x': 1 }, { 'x': 3 }], 'x')`,
	pullAllBy(arr, [{ 'x': 1 }, { 'x': 3 }], 'x'));
