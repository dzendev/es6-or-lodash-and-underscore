const und = require('underscore');
const lod = require('lodash');

/**
 * map - возвращает преобразованный массив
 * _.map([4, 8], n => n * n) -> [ 16, 64 ]
 */


// lodash
function square(n) {
	return n * n;
}
console.log("lod.map([4, 8], square)", lod.map([4, 8], square));

console.log("lod.map({ 'a': 4, 'b': 8 }, square)", lod.map({ 'a': 4, 'b': 8 }, square));

var users = [
	{ 'user': 'barney' },
	{ 'user': 'fred' }
];
console.log("lod.map(users, 'user')", lod.map(users, 'user'));

// es6
console.log("[4, 8].map(n => n * n)", [4, 8].map(n => n * n));

console.log("Object.values({ 'a': 4, 'b': 8 }).map(n => n * n)", Object.values({ 'a': 4, 'b': 8 }).map(n => n * n));

console.log("users.map(el => el.user)", users.map(el => el.user));