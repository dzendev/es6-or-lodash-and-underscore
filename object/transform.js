const und = require('underscore');
const lod = require('lodash');

/**
 * transform
 */

// lodash
let transformObj = lod.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
}, {});
console.log("transformObj", transformObj);

// es6
function transform(obj) {
	let newObj = {};
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			(newObj[obj[prop]] || (newObj[obj[prop]] = [])).push(prop);
		}
	}
	return newObj;
}

console.log("transform({ 'a': 1, 'b': 2, 'c': 1 })", transform({ 'a': 1, 'b': 2, 'c': 1 }));