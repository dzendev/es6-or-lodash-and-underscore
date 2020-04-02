const und = require('underscore');
const lod = require('lodash');

/**
 * reduce - возвращает результирующее значение
 * od.reduce([1, 2], (sum, n) => sum + n, 0) -> 3
 */

console.log("und.reduce([1, 2], (sum, n) => sum + n, 0)", und.reduce([1, 2], (sum, n) => sum + n, 0));
let arr1 = und.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
console.log("arr1", arr1);

// lodash
console.log("lod.reduce([1, 2], (sum, n) => sum + n, 0)", lod.reduce([1, 2], (sum, n) => sum + n, 0));
let arr2 = lod.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
console.log("arr2", arr2);

// es6
console.log("[1, 2].reduce((sum, n) => sum + n)", [1, 2].reduce((sum, n) => sum + n));
function reduceObject(obj) {
	let arr = Object.entries(obj);
	let o = {};
	arr.forEach(el => {
		(o[el[1]] || (o[el[1]] = [])).push(el[0])
	});
	return o;
}
reduceObject({ 'a': 1, 'b': 2, 'c': 1 })
console.log("reduceObject({ 'a': 1, 'b': 2, 'c': 1 })", reduceObject({ 'a': 1, 'b': 2, 'c': 1 }));