const und = require('underscore');
const lod = require('lodash');

/**
 * flatMap - каждый элемент вызывается оператором "остаточные параметры (...)"
 * _.flatMap([1, 2], n => [n, n]) -> [1, 1, 2, 2]
 */

// lodash
function duplicate(n) {
  return [n, n];
}

console.log("lod.flatMap([1, 2], duplicate)", lod.flatMap([1, 2], duplicate));
console.log("lod.flatMap([1, [2]], n => n)", lod.flatMap([1, [2]], n => n));
console.log("lod.flatMap([1, [2, [3]]], n => n)", lod.flatMap([1, [2, [3]]], n => n));

// es6
function flatMap(arr, fn) {
	return arr.map(fn).flat(1);
}
console.log("flatMap([1, 2], duplicate)", flatMap([1, 2], duplicate));
flatMap([1, [2]], n => n)
console.log("flatMap([1, [2]], n => n)", flatMap([1, [2]], n => n));
console.log("flatMap([1, [2, [3]]], n => n)", flatMap([1, [2, [3]]], n => n));