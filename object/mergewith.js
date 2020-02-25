const und = require('underscore');
const lod = require('lodash');

/**
 * mergeWith
 */

function customizer(objValue, srcValue) {
  if (lod.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

var object = { 'a': [1], 'b': [2] };
var other = { 'a': [3], 'b': [4] };

// lodash
// console.log("lod.mergeWith(object, other, customizer)", lod.mergeWith(object, other, customizer));

// es6
function mergeWith(obj1, obj2) {
	for (let prop in obj1) {
		if (obj1.hasOwnProperty(prop)) {
			obj1[prop].push(...obj2[prop])
		}
	}
	return obj1;
}

console.log("mergeWith(object, other)", mergeWith(object, other));
