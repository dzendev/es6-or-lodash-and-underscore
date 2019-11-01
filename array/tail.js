const und = require('underscore');
const lod = require('lodash');

/**
 * tail - всё кроме первого элемента
 * _.tail([1, 2, 3]) -> [ 2, 3 ]
 */

// lodash
console.log("lod.tail([1, 2, 3])", lod.tail([1, 2, 3]));

// es6
console.log("[1, 2, 3].slice(1)", [1, 2, 3].slice(1));
