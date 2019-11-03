const und = require('underscore');
const lod = require('lodash');

/**
 * sortedLastIndex -возвращает индекс последнего вхождения
 * значения в отсортированном массиве
 * _.sortedLastIndex([4, 5, 5, 5, 6], 5) -> 4
 */

// lodash
console.log("lod.sortedLastIndex([4, 5, 5, 5, 6], 5)", lod.sortedLastIndex([4, 5, 5, 5, 6], 5));

// es6
function sortedLastIndex(arr, value) {
	arr.sort();
	for(let i = arr.length - 1, j = arr.length - 2; i > 0; i--, j--){
		if(arr[i] >= value && value >= arr[j]) {
			return i;
		}
	}
	return arr;
}

console.log("sortedLastIndex([4, 5, 5, 5, 6], 5)", sortedLastIndex([4, 5, 5, 5, 6], 5));