const und = require('underscore');
const lod = require('lodash');

/**
 * some - перебирает объект
 * _.some(6, 4) -> 24
 */



// lodash
console.log("lod.some([null, 0, 'yes', false], Boolean)", lod.some([null, 0, 'yes', false], Boolean));

var users = [
	{ 'user': 'barney', 'active': true },
	{ 'user': 'fred',   'active': false }
];

console.log("lod.some(users, { 'user': 'barney', 'active': false })", lod.some(users, { 'user': 'barney', 'active': false }));
console.log("lod.some(users, ['active', false])", lod.some(users, ['active', false]));
console.log("lod.some(users, 'active')", lod.some(users, 'active'));

// es6
console.log("[null, 0, 'yes', false].some(Boolean)", [null, 0, 'yes', false].some(Boolean));
console.log("users.some(o => o.user == 'barney' && o.active === false)", users.some(o => o.user == 'barney' && o.active === false));
console.log("users.some(o => o.active === false)", users.some(o => o.active === false));
console.log("users.some(o => 'active' in o)", users.some(o => o['active']));