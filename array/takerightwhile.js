const und = require('underscore');
const lod = require('lodash');

/**
 * takeRightWhile - часть массива справа
 * _.takeRightWhile([
	{ 'user': 'barney',  'active': true },
	{ 'user': 'fred',    'active': false },
	{ 'user': 'pebbles', 'active': false }
]) -> [
	{ user: 'fred', active: false },
	{ user: 'pebbles', active: false }
]
 */

var users = [
	{ 'user': 'barney',  'active': true },
	{ 'user': 'fred',    'active': false },
	{ 'user': 'pebbles', 'active': false }
];

// lodash
console.log("lod.takeRightWhile(users, ['active', false])", lod.takeRightWhile(users, ['active', false]));

// es6
function takeRightWhile(arr, value){
	return arr.filter(function(elem) {
		return elem[value[0]] === value[1];
	});
	// let arrValue = [];
	// for (let i = arr.length - 1; i >= 0; --i) {
	// 	if(arr[i][value[0]] === value[1]) arrValue.push(arr[i]);
	// }
	// return arrValue.reverse();
}

console.log("takeRightWhile(users, ['active', false])", takeRightWhile(users, ['active', false]));
