const und = require('underscore');
const lod = require('lodash');

/**
 * isInteger - проверяет является ли выражение integer
 */

// lodash
console.log("lod.isInteger(3)", lod.isInteger(3));
console.log("lod.isInteger(Number.MIN_VALUE)", lod.isInteger(Number.MIN_VALUE));
console.log("lod.isInteger(Infinity)", lod.isInteger(Infinity));
console.log("lod.isInteger('3')", lod.isInteger('3'));

// es6
console.log("parseInt(3) === 3", parseInt(3) === 3);
console.log("parseInt(Number.MIN_VALUE) === Number.MIN_VALUE", parseInt(Number.MIN_VALUE) === Number.MIN_VALUE);
console.log("parseInt(Infinity) === Infinity", parseInt(Infinity) === Infinity);
console.log("parseInt('3') === '3'", parseInt('3') === '3');