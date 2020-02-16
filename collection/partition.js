const und = require('underscore');
const lod = require('lodash');

/**
 * conutBy - создаёт объект. ключи получены через вызов функции, значения получены количеством раз вызова фукнции
 * _.countBy([6.1, 4.2, 6.3], Math.floor) -> {'4': 1, '6': 2}
 */

var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

// lodash
console.log("lod.partition(users, function(o) { return o.active; })", lod.partition(users, function(o) { return o.active; }));
console.log("lod.partition(users, { 'age': 1, 'active': false })", lod.partition(users, { 'age': 1, 'active': false }));
console.log("lod.partition(users, ['active', false])", lod.partition(users, ['active', false]));
console.log("lod.partition(users, 'active')", lod.partition(users, 'active'));

// es6
function equalObject(obj1, obj2) {
	for (let prop in obj2) {
		if (obj2[prop] !== obj1[prop]) return false;
	}
	return true;
}

function partition(arr, condition) {
	let array = [[], []];
	if(typeof condition === 'function') {
		arr.forEach(el => {
			if(condition(el)) {
				array[0].push(el);
			} else {
				array[1].push(el);
			}
		});
	} else if (Array.isArray(condition)) {
		arr.forEach(el => {
			if(el[condition[0]] === condition[1]) {
				array[0].push(el);
			} else {
				array[1].push(el);
			}
		});
	} else if (typeof condition === 'object' && condition !== null){
		arr.forEach(el => {
			if(equalObject(el, condition)) {
				array[0].push(el);
			} else {
				array[1].push(el);
			}
		});
	} else if (typeof condition === 'string') {
		arr.forEach(el => {
			if(el[condition]) {
				array[0].push(el);
			} else {
				array[1].push(el);
			}
		});
	} else {
		return arr;
	}
	return array;
}

console.log("partition(users, function(o) { return o.active; })", partition(users, function(o) { return o.active; }));
console.log("partition(users, { 'age': 1, 'active': false })", partition(users, { 'age': 1, 'active': false }));
console.log("partition(users, ['active', false])", partition(users, ['active', false]));
console.log("partition(users, 'active')", partition(users, 'active'));