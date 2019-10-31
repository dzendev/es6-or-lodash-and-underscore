const und = require('underscore');
const lod = require('lodash');

/**
 * sortedIndex - индекс для вставки элемента для сортированного массива
 * для несортированного массива работать не будет
 * _.sortedIndex([10, 30, 50, 60, 70], 40) -> 2
 */
// underscore
console.log("und.sortedIndex([10, 50, 30, 70, 60], 40)", und.sortedIndex([10, 50, 30, 70, 60], 40));
console.log("und.sortedIndex([10, 30, 50, 60, 70], 40)", und.sortedIndex([10, 30, 50, 60, 70], 40));
console.log("und.sortedIndex([10, 50, 30, 70, 60].sort(), 40)", und.sortedIndex([10, 50, 30, 70, 60].sort(), 40));

// lodash
console.log("lod.sortedIndex([10, 50, 30, 70, 60], 40)", lod.sortedIndex([10, 50, 30, 70, 60], 40));
console.log("lod.sortedIndex([10, 30, 50, 60, 70], 40)", lod.sortedIndex([10, 30, 50, 60, 70], 40));
console.log("lod.sortedIndex([10, 50, 30, 70, 60].sort(), 40)", lod.sortedIndex([10, 50, 30, 70, 60].sort(), 40));

// es6
function sortedIndex(arr, value) {
	arr.sort();
	for(let i = 0, j = 1; i < arr.length; i++, j++){
		if(arr[i] <= value && value <= arr[j]) {
			// arr.splice(j, 0, value);
			// break;
			return j;
		}
	}
	return arr;
}
console.log("sortedIndex([10, 30, 50, 60, 70], 40)", sortedIndex([10, 30, 50, 60, 70], 40));
console.log("sortedIndex([10, 50, 30, 70, 60], 40)", sortedIndex([10, 50, 30, 70, 60], 40));





