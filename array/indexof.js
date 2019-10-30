const und = require('underscore');
const lod = require('lodash');

/**
 * indexOf - ищет индекс первого совпадения
 * _.indexOf([1, 2, 1, 2], 2) -> 1
 */

const arr = [1, 2, 1, 3, 2];

// underscore
console.log("und.indexOf(arr, 2)", und.indexOf(arr, 2));
console.log("und.indexOf(arr, 2, 2)", und.indexOf(arr, 2, 2));

// lodash
console.log("lod.indexOf(arr, 2)", lod.indexOf(arr, 2));
console.log("lod.indexOf(arr, 2, 2)", lod.indexOf(arr, 2, 2));

// es6
console.log("arr.indexOf(2)", arr.indexOf(2));
console.log("arr.indexOf(2, 2)", arr.indexOf(2, 2));