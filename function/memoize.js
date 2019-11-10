const und = require('underscore');
const lod = require('lodash');

/**
 * memoize - мемоизация
 */

// underscore
var fibonacci = und.memoize(function(n) {
  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});

console.time("und.memoize1");
console.log("fibonacci(1000)", fibonacci(1000));
console.timeEnd("und.memoize1");
console.time("und.memoize2");
console.log("fibonacci(1000)", fibonacci(1000));
console.timeEnd("und.memoize2");

// lodash
var fibonacci1 = lod.memoize(function(n) {
  return n < 2 ? n: fibonacci1(n - 1) + fibonacci1(n - 2);
});

console.time("lod.memoize1");
console.log("fibonacci1(1000)", fibonacci1(1000));
console.timeEnd("lod.memoize1");
console.time("lod.memoize2");
console.log("fibonacci1(1000)", fibonacci1(1000));
console.timeEnd("lod.memoize2");

// es6
function memoize(fn){
	const cache = new Map();
	return function(value){
		if(!cache.has(value)) cache.set(value, fn(value));
		return cache.get(value);
	};
}

var fibonacci2 = memoize(function(n) {
  return n < 2 ? n: fibonacci2(n - 1) + fibonacci2(n - 2);
});

console.time("memoize1");
console.log("fibonacci2(1000)", fibonacci2(1000));
console.timeEnd("memoize1");
console.time("memoize2");
console.log("fibonacci2(1000)", fibonacci2(1000));
console.timeEnd("memoize2");
