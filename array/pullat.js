const und = require('underscore');
const lod = require('lodash');

/**
 * pullAt - удаляет элементы с заданными индексами
 * _.pullAt([ 'a', 'b', 'c', 'd' ], [1, 3]) -> [ 'b', 'd' ]
 */

// lodash
var arr = ['a', 'b', 'c', 'd'];

console.log("arr", arr);
console.log("lod.pullAt(arr, [1, 3])", lod.pullAt(arr, [1, 3]));
console.log("arr", arr);

// es6
var arr1 = ['a', 'b', 'c', 'd'];

function pullAt(arr, value) {
	var array = [];
	value[0]++; // необходимо для правельной работы цикла
	// за каждый проход создаётся массив искомых элементов и уменьшается исходный
	value.forEach((elem, index) => {
		array.push(arr[elem - 1]);
		arr.splice(elem - 1, 1);
	});
	return array;
}

console.log("arr1", arr1);
console.log("pullAt(arr1, [1, 3])", pullAt(arr1, [1, 3]));
console.log("arr1", arr1);





