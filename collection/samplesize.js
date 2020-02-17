const und = require('underscore');
const lod = require('lodash');

/**
 * sampleSize - возвращает массив случайных элементов из исходной коллекции до заданного рзамера этой коллекции
 * _.sampleSize([1, 2, 3], 2) -> [ 3, 1 ]
 */

// lodash
console.log("lod.sampleSize([1, 2, 3], 2)", lod.sampleSize([1, 2, 3], 2));
console.log("lod.sampleSize([1, 2, 3], 4)", lod.sampleSize([1, 2, 3], 4));

// es6
function sampleSize(arr, size) {
	if(arr.length < size) size = arr.length;
	let setArray = new Set();
	while(setArray.size < size) {
		let randomIndex =	Math.floor( Math.random( ) * (arr.length) );
		setArray.add(arr[randomIndex]);
	}
	return [...setArray];
}

console.log("sampleSize([1, 2, 3], 2)", sampleSize([1, 2, 3], 2));
console.log("sampleSize([1, 2, 3], 4)", sampleSize([1, 2, 3], 4));
