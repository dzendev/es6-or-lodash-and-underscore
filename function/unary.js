const und = require('underscore');
const lod = require('lodash');

/**
 * unary - создаёт функцию, которая принимает только один аргумент
 */

// lodash
function fn(a, b, c) {
	let arr = [...arguments];
	return arr;
}

console.log("fn(1, 2, 3)", fn(1, 2, 3));
let fnUnary = lod.unary(fn);
console.log("fnUnary(1, 2, 3)", fnUnary(1, 2, 3));

// es6
function unary(fn) {
	return function(...args) {
		return fn(args[0]);
	};
}

let fnUnary2 = unary(fn);
console.log("fnUnary2(1, 2, 3)", fnUnary2(1, 2, 3));