const und = require('underscore');
const lod = require('lodash');

/**
 * unzipWith - создаёт из запакованного массива один на основе callback
 * _.unzipWith(['b', 'a'], [1, 2]) -> { b: 1, a: 2 }
 */

// lodash
console.log("lod.unzipWith([[1, 10, 100], [2, 20, 200]], lod.add)", lod.unzipWith([[1, 10, 100], [2, 20, 200]], lod.add));
console.log(`lod.unzipWith([[1, 10, 100], [2, 20, 200]], function(a, b){
	return a - b;
})`, lod.unzipWith([[1, 10, 100], [2, 20, 200]], function(a, b){
	return a - b;
}));

// es6
function unzipWith(arr, callback) {
	return arr[0].map(function (elem, index) {
		return callback(elem, arr[1][index]);
	});
}

console.log(`unzipWith([[1, 10, 100], [2, 20, 200]], function(a, b){
	return a - b;
})`, unzipWith([[1, 10, 100], [2, 20, 200]], function(a, b){
	return a - b;
}));