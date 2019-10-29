const lod = require('lodash');

/**
 * concat - объединение массивов
 * _.concat(arr, 2, [3], [[4]]) -> [ 1, 2, 3, [ 4 ] ]
 */

const arr = [1];

// lodash
console.log("lod.concat(arr, 2, [3], [[4]])", lod.concat(arr, 2, [3], [[4]]));

// es6
console.log("[...arr, 2, ...[3], ...[[4]]]", [...arr, 2, ...[3], ...[[4]]]);
