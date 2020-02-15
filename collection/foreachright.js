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
lod.eachRight([11, 22], function(value) {
	console.log(value);
});

// es6
[1, 2].reduceRight((_, el) => console.log(el), 0);
let arr = [11, 22];
for (let i = arr.length - 1; i >= 0; --i) {
	console.log(arr[i]);
}
