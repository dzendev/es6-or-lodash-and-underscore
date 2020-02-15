const und = require('underscore');
const lod = require('lodash');

/**
 * findLast - возвращает последний найденный в массиве элемент
 */

console.log("lod.findLast([1, 2, 3, 4], (n) => n % 2 == 1)", lod.findLast([1, 2, 3, 4], (n) => n % 2 == 1));

// es6
console.log("[1, 2, 3, 4].filter(el => el % 2 == 1).pop()", [1, 2, 3, 4].filter(el => el % 2 == 1).pop());

let arr = [1, 2, 3, 4, 5, 6];
for (let i = arr.length - 1; i >= 0; --i) {
	if(arr[i] % 2 == 1) {
		console.log(arr[i]);
		break;
	}
}