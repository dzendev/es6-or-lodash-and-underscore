const und = require('underscore');
const lod = require('lodash');

/**
 * initial - возвращает все кроме последнего элемента массива
 * _.initial([1, 2, 3, 4]) -> [1, 2, 3]
 */

const arr = [1, 2, 3, 4, 5];

// underscore
console.log("und.initial(arr)", und.initial(arr)); // -> [1, 2, 3, 4]
console.log("und.initial(arr)", und.initial(arr, 2)); // -> [1, 2, 3]

// lodash
console.log("lod.initial(arr)", lod.initial(arr));

// es6
console.log("arr.slice(0, -1)", arr.slice(0, -1));
console.log("arr.slice(0, -2)", arr.slice(0, -2)); // und.initial(arr, 2))