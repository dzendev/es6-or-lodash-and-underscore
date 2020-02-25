const und = require('underscore');
const lod = require('lodash');

/**
 * merge
 */

var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

// lodash
// console.log("lod.merge(object, other)", lod.merge(object, other));

// es6
function merge(obj1, obj2) {
	for (let prop in obj1) {
		if (obj1.hasOwnProperty(prop)) {
			obj1[prop].map((el, index) => Object.assign(el, obj2[prop][index]));
		}
	}
	return obj1;
}

console.log("merge(object, other)", merge(object, other));
