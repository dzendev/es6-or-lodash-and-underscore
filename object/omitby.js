const und = require('underscore');
const lod = require('lodash');

/**
 * omitBy - создаёт объект неудовлетворяющий свойствам переданной функции
 */

var object = { 'a': 1, 'b': '2', 'c': 3 };

// underscore
console.log("und.omit(object, (value, key, obj) => ['a', 'c'].includes(key))", und.omit(object, (value, key, obj) => ['a', 'c'].includes(key)));

// lodash
console.log("lod.omitBy(object, (value, key, obj) => ['a', 'c'].includes(key))", lod.omitBy(object, (value, key, obj) => ['a', 'c'].includes(key)));

// es6
function omitBy(obj, callback) {
	let newObj = {};
	for (let prop in obj) {
		if (!callback(obj[prop], prop, obj) && obj.hasOwnProperty(prop)) {
			newObj[prop] = obj[prop];
		}
	}
	return newObj;
}

console.log("omitBy(object, (value, key, obj) => ['a', 'c'].includes(key))", omitBy(object, (value, key, obj) => ['a', 'c'].includes(key)));