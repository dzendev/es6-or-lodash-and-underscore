const und = require('underscore');
const lod = require('lodash');

/**
 * takeWhile - создаёт из запакованного массива один на основе callback
 * _.takeWhile([
 * 	{ 'user': 'barney',  'active': false },
 * 	{ 'user': 'fred',    'active': false },
 * 	{ 'user': 'pebbles', 'active': true }
 * ], ['active', false])
 * -> [
 * 	{ user: 'barney', active: false },
 * 	{ user: 'fred', active: false }
 * ]
 */

var users = [
	{ 'user': 'barney',  'active': false },
	{ 'user': 'fred',    'active': false },
	{ 'user': 'pebbles', 'active': true }
];

// lodash
console.log("lod.takeWhile(users, ['active', false])", lod.takeWhile(users, ['active', false]));

// es6
function takeWhile(arr, value) {
	return arr.filter(function(el) {
		return el[value[0]] === value[1];
	});
}

console.log("takeWhile(users, ['active', false])", takeWhile(users, ['active', false]));