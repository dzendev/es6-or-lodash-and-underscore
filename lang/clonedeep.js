const und = require('underscore');
const lod = require('lodash');

/**
 * cloneDeep - глубокое копирование
 */

var objects = [{ 'a': 1 }, { 'b': 2 }];

// lodash
var deep = lod.cloneDeep(objects);
console.log(deep[0] === objects[0]);

// es6
function copy(aObject) {
	if (!aObject) {
		return aObject;
	}

	let v;
	let bObject = Array.isArray(aObject) ? [] : {};
	for (const k in aObject) {
		v = aObject[k];
		bObject[k] = (typeof v === "object") ? copy(v) : v;
	}

	return bObject;
}

var clone = copy([{ 'a': 1 }, { 'b': 2 }]);
console.log(clone[0] === objects[0]);
