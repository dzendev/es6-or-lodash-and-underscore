const und = require('underscore');
const lod = require('lodash');

/**
 * zipObject - запаковка двух массивов в объект
 * _.zipObject(['b', 'a'], [1, 2]) -> { b: 1, a: 2 }
 */

// lodash
console.log("lod.zipObject(['b', 'a'], [1, 2])", lod.zipObject(['b', 'a'], [1, 2]));

// es6
function zipObject(arr1, arr2) {
	var obj = {};
	for(let i = 0;i < arr1.length;i++) {
		obj[arr1[i]] = arr2[i];
	}
	return obj;
}

console.log("zipObject(['b', 'a'], [1, 2])", zipObject(['b', 'a'], [1, 2]));