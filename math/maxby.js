const und = require('underscore');
const lod = require('lodash');

/**
 * maxBy - максимальное значение массива состоящего из объектов
 * _.maxBy([{ 'n': 1 }, { 'n': 2 }]) -> { n: 2 }
 */

var objects = [{ 'n': 1 }, { 'n': 2 }, { 'n': 3 }, { 'n' : 2 }];

// lodash
console.log("lod.maxBy(objects, function(o) { return o.n; })", lod.maxBy(objects, function(o) { return o.n; }));
console.log("lod.maxBy(objects, 'n')", lod.maxBy(objects, 'n'));

// es6
function maxBy(arr, prop) {
	let elemMax = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if(arr[i][prop] > elemMax[prop]) elemMax = arr[i];
	}
	return elemMax;
}
console.log("maxBy(objects, 'n')", maxBy(objects, 'n'));