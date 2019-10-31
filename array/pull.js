const und = require('underscore');
const lod = require('lodash');

/**
 * pull - удаляет совпадения в массиве
 * _.pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c') -> 'b'
 */

const arr = ['a', 'b', 'c', 'a', 'b', 'c'];

// lodash
console.log("lod.pull(arr, 'a', 'c')", lod.pull(arr, 'a', 'c'));

// es6
function pull(arr, ...value) {
	return arr.filter(function(elem) {
		return value.indexOf(elem) == -1;
	});
	// return difference(arr, value);
}

console.log("pull(arr, 'a', 'c')", pull(arr, 'a', 'c'));