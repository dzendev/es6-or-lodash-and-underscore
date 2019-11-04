const und = require('underscore');
const lod = require('lodash');

/**
 * first - возвращает первый элемент массива
 * _.first([5, 4, 3, 2, 1]) -> 5
 */

const arr = [5, 4, 3, 2, 1];

// underscore
console.log("und.first(arr)", und.first(arr));
console.log("und.first(arr)", und.first(arr, 2));
console.log("und.head(arr)", und.head(arr));
console.log("und.take(arr)", und.take(arr));

// lodash
console.log("lod.first(arr)", lod.first(arr));
console.log("lod.head(arr)", lod.head(arr));

// es6
console.log("arr[0]", arr[0]);
console.log("arr.slice(0, 2)", arr.slice(0, 2)); // und.first(arr, 2))