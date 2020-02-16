const und = require('underscore');
const lod = require('lodash');

/**
 * groupBy - создаёт объект. ключи получены через вызов функции, значения как есть в виде массива
 * _.groupBy([6.1, 4.2, 6.3], Math.floor) -> { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }
 */

// lodash
console.log("lod.groupBy([6.1, 4.2, 6.3], Math.floor)", lod.groupBy([6.1, 4.2, 6.3], Math.floor));
console.log("lod.groupBy(['one', 'two', 'three'], 'length')", lod.groupBy(['one', 'two', 'three'], 'length'));

// es6
function groupBy(arr, fn) {
	let obj = {};
	arr.forEach(el => {
		let key = undefined;
		if(typeof fn === 'function') {
			key = fn(el);
		} else if(typeof fn === 'string'){
			key = el[fn];
		} else {
			throw new Error('Неверный тип');
		}
		if(key in obj) {
			obj[key].push(el);
		} else {
			obj[key] = [];
			obj[key].push(el);
		}
	});
	return obj;
}

console.log("groupBy([6.1, 4.2, 6.3], Math.floor)", groupBy([6.1, 4.2, 6.3], Math.floor));
console.log("groupBy(['one', 'two', 'three'], length)", groupBy(['one', 'two', 'three'], 'length'));