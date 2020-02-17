const und = require('underscore');
const lod = require('lodash');

/**
 * reduce - возвращает результирующее значение, перебор происходит справа
 */


// lodash
var array = [[0, 1], [2, 3], [4, 5]];
let arr1 = lod.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
console.log("arr1", arr1);

// es6
console.log("array.reduceRight((flattened, other) => flattened.concat(other), [])", array.reduceRight((flattened, other) => flattened.concat(other), []));