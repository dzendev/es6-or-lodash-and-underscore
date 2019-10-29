const und = require('underscore');
const lod = require('lodash');

/**
 * uniq - уникальные элементы массива
 * _.uniq([2, 1, 2, 3, 1]) -> [ 2, 1, 3 ]
 */

const arr = [2, 1, 2, 3, 1];

// underscore
console.log("und.uniq(arr)", und.uniq(arr));
console.log("und.unique(arr)", und.unique(arr)); // alias

// lodash
console.log("lod.uniq(arr)", lod.uniq(arr));

// es6
console.log("[...new Set(arr)]", [...new Set(arr)]);