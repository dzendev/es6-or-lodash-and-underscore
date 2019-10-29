const und = require('underscore');
const lod = require('lodash');

/**
 * flatten - на один уровень вверх
 * _.flatten([1, [2, [3, [4]], 5]]) -> [ 1, 2, [ 3, [ 4 ] ], 5 ]
 */

const arr = [1, [2, [3, [4]], 5]];

// underscore
console.log("und.flatten(arr)", und.flatten(arr, 1));

// lodash
console.log("lod.flatten(arr)", lod.flatten(arr));

// es6
console.log("arr.flat(1)", arr.flat(1));
console.log("arr.flat()", arr.flat());

// func
function flatten(arr) {
	let arrFlatten = [];
	arr.forEach(elem => {
		if(Array.isArray(elem)) arrFlatten.push(...elem);
		else arrFlatten.push(elem);
	});
	return arrFlatten;
}

console.log("flatten(arr)", flatten(arr));