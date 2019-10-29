const und = require('underscore');
const lod = require('lodash');

/**
 * flattenDepth - выравнивание массива до определённого уровня
 * _.flattenDepth([1, [2, [3, [4]], 5]], 2) -> [ 1, 2, 3, [ 4 ], 5 ]
 */

const arr = [1, [2, [3, [4]], 5]];

// underscore
console.log("und.flatten(arr)", und.flatten(arr, true));

// lodash
console.log("lod.flattenDepth(arr)", lod.flattenDepth(arr));
console.log("lod.flattenDepth(arr, 1)", lod.flattenDepth(arr, 1));
console.log("lod.flattenDepth(arr, 2)", lod.flattenDepth(arr, 2));

// es6
console.log("arr.flat()", arr.flat());
console.log("arr.flat(1)", arr.flat(1));
console.log("arr.flat(2)", arr.flat(2));

function flattenDepth(arr, depth = 1) {
	let arrFlatten = [];
	arr.forEach(elem => {
		if(Array.isArray(elem) && depth > 0) {
			// Вариант с декрементом не будет работать
			// arrFlatten.push(...flattenDepth(elem, --depth));
			arrFlatten.push(...flattenDepth(elem, depth - 1));
		} else {
			arrFlatten.push(elem);
		}
	});
	return arrFlatten;
}

console.log("flattenDepth(arr)", flattenDepth(arr));
console.log("flattenDepth(arr)", flattenDepth(arr, 1));
console.log("flattenDepth(arr, 2)", flattenDepth(arr, 2));
