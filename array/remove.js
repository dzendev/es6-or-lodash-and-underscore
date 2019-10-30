const und = require('underscore');
const lod = require('lodash');

/**
 * remove - удалить элементы из массива
 * _.remove([1, 2, 3, 4], n => n % 2 == 02) -> [ 2, 4 ]
 */

const arr = [1, 2, 3, 4];

// lodash
console.log("arr", arr);
console.log("lod.remove(arr, n => n % 2 == 0)", lod.remove(arr, n => n % 2 == 0));
console.log("arr", arr);

// es6
// первый вариант не изменяет исходный массив
const arr1 = [1, 2, 3, 4];

console.log("arr1", arr1);
const evens1 = arr1.filter(n => n % 2 == 0);
console.log("evens1", evens1);
console.log("arr1", arr1);

// второй вариант изменяет исходный массив
const arr2 = [1, 2, 3, 4];

console.log("arr2", arr2);
const evens2 = arr2.filter(function(elem, index, arr) {
	if(elem % 2 == 0){
		arr.splice(index, 1);
		return true;
	} else {
		return false;
	}
});
console.log("evens2", evens2);
console.log("arr2", arr2);
