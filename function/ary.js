const und = require('underscore');
const lod = require('lodash');

/**
 * ary - возвращает новую функцию с ограниченныи количеством аргументов
 */

// lodash
function getArg() {
	return [...arguments];
}

var arg1 = lod.ary(getArg, 2);
console.log("arg1(1, 2, 3, 4)", arg1(1, 2, 3, 4));

// es6
function ary(fn, len) {
	return function(){
		let arg = Array.prototype.slice.call(arguments, 0, len);
		return fn(...arg);
	};
}

var arg2 = ary(getArg, 2);
console.log("arg2(1, 2, 3, 4)", arg2(1, 2, 3, 4));
