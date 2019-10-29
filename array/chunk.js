const und = require('underscore');
const lod = require('lodash');

/**
 * chunk - разбивает массив на части
 * _.chunk(['a', 'b', 'c', 'd'], 2) -> [ [ 'a', 'b' ], [ 'c', 'd' ] ]
 */

const arr = ['a', 'b', 'c', 'd'];

// underscore
console.log("und.chunk(arr)", und.chunk(arr)); // -> [] фторой аргунмет обязателен
console.log("und.chunk(arr, 2)", und.chunk(arr, 2));
console.log("und.chunk(arr, 3)", und.chunk(arr, 3));

// lodash
console.log("lod.chunk(arr)", lod.chunk(arr)); // -> [ [ 'a' ], [ 'b' ], [ 'c' ], [ 'd' ] ]
console.log("lod.chunk(arr, 2)", lod.chunk(arr, 2));
console.log("lod.chunk(arr, 3)", lod.chunk(arr, 3));

// es6
function chunk(arr, size) {
	let arrLeft = arr.slice(0, size);
	let arrRight = arr.slice(size);
	return [arrLeft, arrRight];
}
console.log("chunk(arr)", chunk(arr)); // -> [ [ 'a', 'b', 'c', 'd' ], [ 'a', 'b', 'c', 'd' ] ]
console.log("chunk(arr, 2)", chunk(arr, 2));
console.log("chunk(arr, 3)", chunk(arr, 3));