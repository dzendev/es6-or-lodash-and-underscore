const und = require('underscore');
const lod = require('lodash');

/**
 * overArgs - создаёт функцию с изменёнными аргументами переданных функции
 */

// lodash
function doubled(n) {
	return n * 2;
}

function square(n) {
	return n * n;
}

var func = lod.overArgs(function(x, y) {
	return [x, y];
}, [square, doubled]);

console.log("func(9, 3)", func(9, 3));
console.log("func(10, 5)", func(10, 5));

// es6
function overArgs(fn, arrFn) {
	return function(...arg){
		let newArg = arg.map((el, index) => {
			return arrFn[index](el);
		});
		return fn(...newArg);
	};
}

var func1 = overArgs(function(x, y) {
	return [x, y];
}, [square, doubled]);

console.log("func1(9, 3)", func1(9, 3));
console.log("func1(10, 5)", func1(10, 5));