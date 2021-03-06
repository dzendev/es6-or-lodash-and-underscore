const und = require('underscore');
const lod = require('lodash');

/**
 * curry - каррирование
 */

// lodash
var abc = function (a, b, c) {
	return [a, b, c];
};

var curried = lod.curryRight(abc);

console.log("curried(1)(2)(3)", curried(1)(2)(3));
console.log("curried(1, 2)(3)", curried(1, 2)(3));
console.log("curried(1, 2, 3)", curried(1, 2, 3));

// es6
function curry(func) {
	return function curried(...args) {
		if(args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function (...args2) {
				args.unshift(...args2);
				return curried.apply(this, args);
			};
		}
	};
}

let curried2 = curry(abc);
console.log("curried2(1)(2)(3)", curried2(1)(2)(3));
console.log("curried2(1, 2)(3)", curried2(1, 2)(3));
console.log("curried2(1, 2, 3)", curried2(1, 2, 3));
