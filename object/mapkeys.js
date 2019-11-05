const und = require('underscore');
const lod = require('lodash');

/**
 * mapKeys - возвращает изменённый объект с новыми названиями свойств
 * _.mapKeys({ 'a': 1, 'b': 2 }, (value, key) => key + value) -> { a1: 1, b2: 2 }
 */


// lodash
console.log(`lod.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	return key + value;
})`, lod.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	return key + value;
}));

// es6
function mapKeys(obj, callback) {
	let objKey = {};
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			objKey[callback(obj[prop], prop)] = obj[prop];
		}
	}
	return objKey;
}

console.log(`mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	return key + value;
})`, mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	return key + value;
}));