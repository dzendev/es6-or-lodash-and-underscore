const und = require('underscore');
const lod = require('lodash');

/**
 * join - создаёт строку из массива с помощью разделителя
 */

// lodash
console.log("lod.join(['a', 'b', 'c'], '~')", lod.join(['a', 'b', 'c'], '~'));

// es6
console.log("['a', 'b', 'c'].join('~')", ['a', 'b', 'c'].join('~'));