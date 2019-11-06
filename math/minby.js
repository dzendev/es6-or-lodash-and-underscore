const und = require('underscore');
const lod = require('lodash');

/**
 * minBy - минимальное значение массива состоящего из объектов
 * _.minBy([{ 'n': 1 }, { 'n': 2 }]) -> { n: 1 }
 */

var objects = [{ 'n': 1 }, { 'n': 2 }, { 'n': 3 }, { 'n' : 2 }];

// lodash
console.log("lod.minBy(objects, function(o) { return o.n; })", lod.minBy(objects, function(o) { return o.n; }));
console.log("lod.minBy(objects, 'n')", lod.minBy(objects, 'n'));

// es6
function minBy(arr, prop) {
	let elemMax = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if(arr[i][prop] < elemMax[prop]) elemMax = arr[i];
	}
	return elemMax;
}
console.log("minBy(objects, 'n')", minBy(objects, 'n'));