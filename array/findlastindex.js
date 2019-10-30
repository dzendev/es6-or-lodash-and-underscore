const und = require('underscore');
const lod = require('lodash');

/**
 * findLastIndex - ищет ндекс последнего совпадения
 * _.findLastIndex([{'x':1}, {'x':2}, {'x':3}], {'x': 2}) -> 3
 */

// underscore
console.log("und.findLastIndex([{'x':1}, {'x':2}, {'x':3}], ['x', 2])", und.findLastIndex([{'x':1}, {'x':2}, {'x':3}, {'x':2}], ['x', 2])); // не будет работать
console.log("und.findLastIndex([{'x':1}, {'x':2}, {'x':3}], {'x': 2})", und.findLastIndex([{'x':1}, {'x':2}, {'x':3}, {'x':2}], {'x': 2}));

// lodash
console.log("lod.findLastIndex([{'x':1}, {'x':2}, {'x':3}], ['x', 2])", lod.findLastIndex([{'x':1}, {'x':2}, {'x':3}, {'x':2}], ['x', 2]));
console.log("lod.findLastIndex([{'x':1}, {'x':2}, {'x':3}], {'x': 2})", lod.findLastIndex([{'x':1}, {'x':2}, {'x':3}, {'x':2}], {'x': 2}));

// es6
function findLastIndex(arr, value) {
	if(Array.isArray(value))
		value = Object.fromEntries([value]);
	for(let i = arr.length - 1; i >= 0; --i) {
		if (JSON.stringify(arr[i]) ===  JSON.stringify(value)) return i;
	}
	return undefined;
}

console.log("findLastIndex([{'x':1}, {'x':2}, {'x':3}, {'x':2}], ['x', 2])", findLastIndex([{'x':1}, {'x':2}, {'x':3}, {'x':2}], ['x', 2]));
console.log("findLastIndex([{'x':1}, {'x':2}, {'x':3}, {'x':2}], {'x': 2})", findLastIndex([{'x':1}, {'x':2}, {'x':3}, {'x':2}], {'x': 2}));