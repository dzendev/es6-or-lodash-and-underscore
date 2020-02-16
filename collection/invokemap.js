const und = require('underscore');
const lod = require('lodash');

/**
 * invokeMap - создаёт объект. ключи получены через вызов функции, значения как есть в виде массива
 * __.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort') -> [[1, 5, 7], [1, 2, 3]]
 */

// lodash
console.log("lod.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort')", lod.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'));
console.log("lod.invokeMap([123, 456], String.prototype.split, '')", lod.invokeMap([123, 456], String.prototype.split, ''));

// es6
console.log("[[5, 1, 7], [3, 2, 1]].map(el => el.sort())", [[5, 1, 7], [3, 2, 1]].map(el => el.sort()));
console.log("[123, 456].map(el => new String(el).split(''))", [123, 456].map(el => new String(el).split('')));