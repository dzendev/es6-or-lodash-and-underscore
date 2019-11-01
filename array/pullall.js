const und = require('underscore');
const lod = require('lodash');

/**
 * pullAll - удаление совпадений в массиве
 * _.pullAll(['a', 'b', 'c', 'a', 'b', 'c'], ['a', 'c']) -> [ 'b', 'b' ]
 */

// lodash
var arr = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log("lod.pullAll(arr, ['a', 'c'])", lod.pullAll(arr, ['a', 'c']));

// es6
function pullAll(arr, value) {
	return arr.filter(function(elem) {
		return value.indexOf(elem) == -1;
	});
	// return difference(arr, value);
}

console.log("pull(arr, ['a', 'c'])", pullAll(arr, ['a', 'c']));





