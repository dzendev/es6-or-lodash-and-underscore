const und = require('underscore');
const lod = require('lodash');

/**
 * zipWith - запаковка массива с помощью callback
 * _.zipWith(['b', 'a'], [1, 2]) -> { b: 1, a: 2 }
 */

// lodash
console.log(`lod.zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {
	return a + b + c;
})`, lod.zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {
	return a + b + c;
}));

console.log(`lod.zipWith([100, 200], [200, 100], function (a, b) {
	return a - b;
})`, lod.zipWith([100, 200], [200, 100], function (a, b) {
	return a - b;
}));

// es6
function zipWith(...value) {
	return value[0].map(function (elem, index) {
		let arrValue = value.slice(0, -1).map((el) => el[index]);
		return value[value.length - 1](...arrValue);
	});
}

console.log(`zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {
	return a + b + c;
})`, zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {
	return a + b + c;
}));

console.log(`zipWith([100, 200], [200, 100], function (a, b) {
	return a - b;
})`, zipWith([100, 200], [200, 100], function (a, b) {
	return a - b;
}));