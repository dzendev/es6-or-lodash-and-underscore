const und = require('underscore');
const lod = require('lodash');

/**
 * flip - переворачивает переданные аргументы функции
 */

// lodash
var flipped = lod.flip(function () {
	// return _.toArray(arguments);
	return [...arguments];
});

console.log("flipped('a', 'b', 'c', 'd')", flipped('a', 'b', 'c', 'd'));

// es6
function flip(callback) {
	return function () {
		arguments = [].reverse.apply(arguments);
		return callback(...arguments);
	};
}

var flipped2 = flip(function () {
	return [...arguments];
});

console.log("flipped2('a', 'b', 'c', 'd')", flipped2('a', 'b', 'c', 'd'));