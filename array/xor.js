const und = require('underscore');
const lod = require('lodash');

/**
 * xor - симметрическая разность множества
 * _.xor([2, 1, 1], [2, 3, 3]) -> [ 1, 3 ]
 */

// lodash
console.log("lod.xor([2, 1], [2, 3])", lod.xor([2, 1], [2, 3]));
console.log("lod.xor([2, 1, 2], [2, 3, 1])", lod.xor([2, 1, 2], [2, 3, 1]));
console.log("lod.xor([2, 1, 1], [2, 3, 3])", lod.xor([2, 1, 1], [2, 3, 3]));
console.log("lod.xor([2, 2], [2, 4])", lod.xor([2, 2], [2, 4]));

// es6
// первый вариант
// function xor(arr1, arr2) {
// 	arr1 = [...new Set(arr1)];
// 	arr2 = [...new Set(arr2)];

// 	let a1 = arr1.filter(function(elem) {
// 		return !arr2.includes(elem);
// 	});
// 	let a2 = arr2.filter(function(elem) {
// 		return !arr1.includes(elem);
// 	});
// 	// return Array.from( new Set([...a1, ...a2]) );
// 	return [...a1, ...a2];
// }

// второй вариант
// function xor(arr1, arr2) {
// 	// удаляются дубликаты и происходит объединение массивов
// 	arrSum = [...new Set([...arr1, ...arr2])];

// 	return arrSum.filter(function(elem) {
// 		return !arr1.includes(elem) || !arr2.includes(elem);
// 	});
// }

// третий вариант
function xor(arr1, arr2) {
	let s1 = new Set(arr1);
	let s2 = new Set(arr2);
	s1.forEach(elem => {
		if(s2.has(elem)) {
			s1.delete(elem);
			s2.delete(elem);
		}
	});
	return [...s1, ...s2];
}

console.log("xor([2, 1], [2, 3])", xor([2, 1], [2, 3]));
console.log("xor([2, 1, 2], [2, 3, 1])", xor([2, 1, 2], [2, 3, 1]));
console.log("xor([2, 1, 1], [2, 3, 3])", xor([2, 1, 1], [2, 3, 3]));
console.log("xor([2, 2], [2, 4])", xor([2, 2], [2, 4]));