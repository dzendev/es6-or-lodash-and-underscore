const und = require('underscore');
const lod = require('lodash');

/**
 * map - возвращает преобразованный массив
 * _.map([4, 8], n => n * n) -> [ 16, 64 ]
 */

function square(n) {
	return n * n;
}

var users = [
	{ 'user': 'barney' },
	{ 'user': 'fred' }
];

// underscore
console.log("und.map([4, 8], square)", und.map([4, 8], square));
console.log("und.map({ 'a': 4, 'b': 8 }, square)", und.map({ 'a': 4, 'b': 8 }, square));
console.log("und.map(users, 'user')", und.map(users, 'user'));

// lodash
console.log("lod.map([4, 8], square)", lod.map([4, 8], square));
console.log("lod.map({ 'a': 4, 'b': 8 }, square)", lod.map({ 'a': 4, 'b': 8 }, square));
console.log("lod.map(users, 'user')", lod.map(users, 'user'));

// es6
console.log("[4, 8].map(n => n * n)", [4, 8].map(n => n * n));
console.log("Object.values({ 'a': 4, 'b': 8 }).map(n => n * n)", Object.values({ 'a': 4, 'b': 8 }).map(n => n * n));
console.log("users.map(el => el.user)", users.map(el => el.user));