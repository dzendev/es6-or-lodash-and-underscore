const und = require('underscore');
const lod = require('lodash');

/**
 * flatMapDepth - работает также как и _.flatMap. за исключение того что происходит выравнивание на указанный уровень
 * _.flatMapDepth([1, 2], n => [n, n]) -> [1, 1, 2, 2]
 */

// lodash
function duplicate(n) {
  return [[[n, n]]];
}

console.log("lod.flatMapDepth([1, 2], duplicate, 2)", lod.flatMapDepth([1, 2], duplicate, 2));

// es6
function flatMapDepth(arr, fn, depth) {
	return arr.map(fn).flat(depth);
}
console.log("flatMapDepth([1, 2], duplicate, 2)", flatMapDepth([1, 2], duplicate, 2));
