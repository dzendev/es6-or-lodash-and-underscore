const und = require('underscore');
const lod = require('lodash');

/**
 * flatMapDeep - работает также как и _.flatMap. за исключение того что происходит рекурсивное выравнинвание
 * _.flatMapDeep([1, 2], n => [n, n]) -> [1, 1, 2, 2]
 */

// lodash
function duplicate(n) {
  return [n, n];
}

console.log("lod.flatMapDeep([1, 2], duplicate)", lod.flatMapDeep([1, 2], duplicate));
console.log("lod.flatMapDeep([1, [2]], n => n)", lod.flatMapDeep([1, [2]], n => n));
console.log("lod.flatMapDeep([1, [2, [3]]], n => n)", lod.flatMapDeep([1, [2, [3]]], n => n));

// es6
function flatMapDeep(arr, fn) {
	return arr.map(fn).flat(Infinity);
}
console.log("flatMapDeep([1, 2], duplicate)", flatMapDeep([1, 2], duplicate));
flatMapDeep([1, [2]], n => n)
console.log("flatMapDeep([1, [2]], n => n)", flatMapDeep([1, [2]], n => n));
console.log("flatMapDeep([1, [2, [3]]], n => n)", flatMapDeep([1, [2, [3]]], n => n));