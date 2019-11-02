const und = require('underscore');
const lod = require('lodash');

/**
 * sortedIndexOf - sortedIndexOf аналог indexOf для отсортированного массива
 * _.sortedIndexOf([4, 5, 5, 5, 6], 5) -> 1
 */

// lodash
console.log("lod.sortedIndexOf([4, 5, 5, 5, 6], 5)", lod.sortedIndexOf([4, 5, 5, 5, 6], 5));

// es6
console.log("[4, 5, 5, 5, 6].indexOf(5)", [4, 5, 5, 5, 6].indexOf(5));
