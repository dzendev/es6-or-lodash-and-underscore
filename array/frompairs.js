const und = require('underscore');
const lod = require('lodash');

/**
 * fromPairs - преобразует массив в объект
 * _.fromPairs([['x', 1], ['y', 2]]) -> { x: 1, y: 2 }
 */

// lodash
console.log("lod.fromPairs([['x', 1], ['y', 2]])", lod.fromPairs([['x', 1], ['y', 2]]));

// es6
console.log("Object.fromEntries([['x', 1], ['y', 2]])", Object.fromEntries([['x', 1], ['y', 2]]));

function fromPairs(arr) {
	let obj = {};
	for(let el of arr){
		obj[el[0]] = el[1];
	}
	return obj;
}

console.log("fromPairs([['x', 1], ['y', 2]])", fromPairs([['x', 1], ['y', 2]]));