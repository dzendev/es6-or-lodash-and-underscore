const und = require('underscore');
const lod = require('lodash');

/**
 * over - возвращает функцию, которая вызывает итерации с полученными аргументами и возвращает их результаты.
 */

// lodash
var func = lod.over([Math.max, Math.min]);
console.log("func(1, 2, 3, 4)", func(1, 2, 3, 4));

// es6
function over(arr) {
	return function(...args){
		return arr.map(f => f(...args));
	};
}

var func2 = over([Math.max, Math.min]);
console.log("func2(1, 2, 3, 4)", func2(1, 2, 3, 4));