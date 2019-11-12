const und = require('underscore');
const lod = require('lodash');

/**
 * rearg - создаёт функцию с изменённым порядком аргументов
 */

// lodash
var rearged = lod.rearg(function(a, b, c) {
	return [a, b, c];
}, [2, 0, 1]);

console.log("rearged('b', 'c', 'a')", rearged('b', 'c', 'a'));

// es6
function rearg(callback, order) {
	return function(...arg) {
		let reargArg = [];
		order.forEach((i) => {
			reargArg.push(arg[i]);
		});
		return callback(...reargArg);
	};
}

var rearged1 = lod.rearg(function(a, b, c) {
	return [a, b, c];
}, [2, 0, 1]);

console.log("rearged1('b', 'c', 'a')", rearged1('b', 'c', 'a'));