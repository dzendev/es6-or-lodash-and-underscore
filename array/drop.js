const und = require('underscore');
const lod = require('lodash');

/**
 * drop - возвращает часть массива исключая первые элементы
 * _.drop([5, 4, 3, 2, 1], 2) -> [ 3, 2, 1 ]
 */

const arr = [5, 4, 3, 2, 1];

// underscore
console.log("und.drop(arr)", und.drop(arr));
console.log("und.drop(arr, 2)", und.drop(arr, 2));
console.log("und.drop(arr, 0)", und.drop(arr, 0));
console.log("und.rest(arr)", und.rest(arr)); // alias
console.log("und.tail(arr)", und.tail(arr)); // alias

// lodash
console.log("lod.drop(arr)", lod.drop(arr));
console.log("lod.drop(arr, 2)", lod.drop(arr, 2));
console.log("lod.drop(arr, 0)", lod.drop(arr, 0));

// es6
console.log("arr.slice(1)", arr.slice(1));
console.log("arr.slice(2)", arr.slice(2));
console.log("arr.slice()", arr.slice());