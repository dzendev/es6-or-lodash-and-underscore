const und = require('underscore');
const lod = require('lodash');

/**
 * forEach - перебор коллекции
 * _.forEach([1, 2], value => value * 2) -> 2 4
 */

// lodash
lod.forEach([1, 2], function(value) {
  console.log(value * 2);
});
lod.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});

// es6
[1, 2].forEach(value => console.log(value * 2))
Object.keys({ 'a': 1, 'b': 2 }).forEach(value => console.log(value));
let obj = { 'a': 1, 'b': 2 };
for (let prop in obj) {
	if (obj.hasOwnProperty(prop)) {
		console.log(prop)
	}
}
