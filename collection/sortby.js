const und = require('underscore');
const lod = require('lodash');

/**
 * sortBy - возвращает отсортированный массив
 * _.sortBy(6, 4) -> 24
 */

var users = [
	{ 'user': 'fred',   'age': 48 },
	{ 'user': 'barney', 'age': 36 },
	{ 'user': 'fred',   'age': 40 },
	{ 'user': 'barney', 'age': 34 }
];

// lodash
console.log("lod.sortBy(users, [function(o) { return o.user; }])", lod.sortBy(users, [function(o) { return o.user; }]));
console.log("lod.sortBy(users, ['user', 'age'])", lod.sortBy(users, ['user', 'age']));

// es6
function sortUser(a, b) {
	if (a.user > b.user) {
		return 1;
	}
	if (a.user < b.user) {
		return -1;
	}
	return 0;
}
console.log("users.sort(sortUser)", users.sort(sortUser));
console.log("users.sort((a, b) => a.age - b.age)", users.sort((a, b) => a.age - b.age));