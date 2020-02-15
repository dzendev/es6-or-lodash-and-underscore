const und = require('underscore');
const lod = require('lodash');

/**
 * forEachRight - перебор коллекции
 * _.forEachRight([1, 2], value => value) -> 2, 1
 */

// lodash
lod.forEachRight([1, 2], function(value) {
  console.log(value);
});

// es6
let arr = [1, 2];
arr.reduceRight((_, el) => console.log(el), 0);
for (let i = arr.length - 1; i >= 0; --i) {
	console.log(arr[i]);
}
