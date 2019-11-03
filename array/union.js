const und = require('underscore');
const lod = require('lodash');

/**
 * union - добавляет только уникальные значения в первый массив
 * _.union([2, 3], [1, 2, 3, 4]) -> [ 2, 3, 1, 4 ]
 */
// underscore
console.log("und.union([2], [1, 2, 3, 4])", und.union([2], [1, 2, 3, 4]));
console.log("und.union([2, 3], [1, 2, 3, 4])", und.union([2, 3], [1, 2, 3, 4]));

// lodash
console.log("lod.union([2], [1, 2, 3, 4])", lod.union([2], [1, 2, 3, 4]));
console.log("lod.union([2, 3], [1, 2, 3, 4])", lod.union([2, 3], [1, 2, 3, 4]));

// es6
function union(arr, arrInsert) {
	let setUnionElem = new Set([...arr, ...arrInsert]);
	return Array.from(setUnionElem);
}
console.log("union([2], [1, 2, 3, 4])", union([2], [1, 2, 3, 4]));
console.log("union([2, 3], [1, 2, 3, 4])", union([2, 3], [1, 2, 3, 4]));