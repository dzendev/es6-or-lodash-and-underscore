const und = require('underscore');
const lod = require('lodash');

/**
 * flattenDeep - многомерный массив в одномерный
 * _.flattenDeep([1, [2, [3, [4]], 5]]) -> [ 1, 2, [ 3, [ 4 ] ], 5 ]
 */

const arr = [1, [2, [3, [4]], 5]];

// underscore
console.log("und.flatten(arr)", und.flatten(arr));

// lodash
console.log("lod.flattenDeep(arr)", lod.flattenDeep(arr));

// es6
console.log("arr.flat(Infinity)", arr.flat(Infinity));

function flattenDeep(arr) {
	let arrFlatten = [];
	arr.forEach(elem => {
		if(Array.isArray(elem)) arrFlatten.push(...flattenDeep(elem));
		else arrFlatten.push(elem);
	});
	return arrFlatten;
}

console.log("flattenDeep(arr)", flattenDeep(arr));