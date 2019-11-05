const und = require('underscore');
const lod = require('lodash');

/**
 * differenceWith - возвращает массив значений из первого массива,
 * которые отсутствуют во втором массиве
 * _.differenceWith([{'x':1, 'y':2}, {'x':2, 'y':1}], [{'x':1, 'y':2}], _.isEqual) -> [ { x: 1, y: 2 } ]
 */

const arr1 = [{'x':1, 'y':2}, {'x':2, 'y':1}];
const arr2 = [{'x':1, 'y':2}];

// lodash
console.log("lod.differenceWith(arr1, arr2, lod.isEqual)", lod.differenceWith(arr1, arr2, lod.isEqual));

function equalObject(...objects) {
	var arrEqual = objects.map(function (elem) {
		return Object.entries(elem).sort(function(a, b) {
			if (a[0] > b[0]) {
				return 1;
			}
			if (a[0] < b[0]) {
				return -1;
			}
			return 0;
		});
	});

	return JSON.stringify(arrEqual[0]) == JSON.stringify(arrEqual[1]);
}

function differenceWith(obj1, obj2, callback) {
	var arr = [];

	for(let elem of obj2) {
		let isEqualObject = false;
		for(let item of obj1) {
			if(!callback(elem, item)) {
				arr.push(item);
			}
		}
	}

	return arr;
}

console.log(`differenceWith(arr1, arr2, equalObject)`, differenceWith(arr1, arr2, equalObject));
