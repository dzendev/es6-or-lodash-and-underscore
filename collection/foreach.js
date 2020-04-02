const und = require('underscore');
const lod = require('lodash');

/**
 * forEach - перебор коллекции
 * _.forEach([1, 2], value => value * 2) -> 2 4
 */

// underscore
und.each([1, 2], function(value){
	console.log(value * 2);
});
und.each({ 'a': 1, 'b': 2 }, function(value, key, list){
	console.log(key);
});

// lodash
lod.forEach([1, 2], function(value) {
	console.log(value * 2);
});
lod.each({ 'a': 1, 'b': 2 }, function(value, key) {
	console.log(key);
});

// es6
[1, 2].forEach(value => console.log(value * 2));

Object.keys({ 'a': 1, 'b': 2 }).forEach(value => console.log(value));

let obj = { 'a': 1, 'b': 2 };
for (let prop in obj) {
	if (obj.hasOwnProperty(prop)) {
		console.log(prop)
	}
}

for (let key of Object.keys(obj)) {
	console.log(key);
}