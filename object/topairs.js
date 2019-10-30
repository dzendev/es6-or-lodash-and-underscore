const und = require('underscore');
const lod = require('lodash');

/**
 * toPairs - преобразует массив в объект
 * _.toPairs({ x: 1, y: 2 }) -> [['x', 1], ['y', 2]]
 */

// lodash
console.log("lod.toPairs({x:1, y:2})", lod.toPairs({x:1, y:2}));
console.log("lod.entries({x:1, y:2})", lod.toPairs({x:1, y:2})); // alias

// es6
console.log("Object.entries({x:1, y:2})", Object.entries({x:1, y:2}));

function toPairs(obj) {
	let arr = [];
	for(let prop in obj) {
		if(obj.hasOwnProperty(prop)) {
			arr.push([prop, obj[prop]]);
		}
	}
	return arr;
}

console.log("toPairs({x:1, y:2})", toPairs({x:1, y:2}));