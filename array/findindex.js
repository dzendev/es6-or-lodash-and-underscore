const und = require('underscore');
const lod = require('lodash');

/**
 * findIndex - ищет ндекс совпадения
 * _.findIndex([{'x':1}, {'x':2}, {'x':3}], {'x': 2}) -> 1
 */

// underscore
console.log("und.findIndex([{'x':1}, {'x':2}, {'x':3}], ['x', 2])", und.findIndex([{'x':1}, {'x':2}, {'x':3}], ['x', 2])); // не будет работать
console.log("und.findIndex([{'x':1}, {'x':2}, {'x':3}], {'x': 2})", und.findIndex([{'x':1}, {'x':2}, {'x':3}], {'x': 2}));

// lodash
console.log("lod.findIndex([{'x':1}, {'x':2}, {'x':3}], ['x', 2])", lod.findIndex([{'x':1}, {'x':2}, {'x':3}, {'x':2}], ['x', 2]));
console.log("lod.findIndex([{'x':1}, {'x':2}, {'x':3}], {'x': 2})", lod.findIndex([{'x':1}, {'x':2}, {'x':3}, {'x':2}], {'x': 2}));

// es6
function findIndex(arr, value) {
	if(Array.isArray(value))
		value = Object.fromEntries([value]);
	return arr.findIndex(el => JSON.stringify(el) === JSON.stringify(value));
}

console.log("findIndex([{'x':1}, {'x':2}, {'x':3}], ['x', 2])", findIndex([{'x':1}, {'x':2}, {'x':3}], ['x', 2]));
console.log("findIndex([{'x':1}, {'x':2}, {'x':3}], {'x': 2})", findIndex([{'x':1}, {'x':2}, {'x':3}], {'x': 2}));