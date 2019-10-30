const und = require('underscore');
const lod = require('lodash');

/**
 * lastIndexOf - ищет индекс первого совпадения
 * _.lastIndexOf([1, 2, 1, 2], 2) -> 4
 */

const arr = [1, 2, 1, 3, 2];

// underscore
console.log("und.lastIndexOf(arr, 2)", und.lastIndexOf(arr, 2));
console.log("und.lastIndexOf(arr, 2, 2)", und.lastIndexOf(arr, 2, 2));

// lodash
console.log("lod.lastIndexOf(arr, 2)", lod.lastIndexOf(arr, 2));
console.log("lod.lastIndexOf(arr, 2, 2)", lod.lastIndexOf(arr, 2, 2));

// es6
console.log("arr.lastIndexOf(2)", arr.lastIndexOf(2));
console.log("arr.lastIndexOf(2, 2)", arr.lastIndexOf(2, 2));