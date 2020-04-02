const und = require('underscore');
const lod = require('lodash');

/**
 * fitler - возвращет массив со всеми элементами, прошедшеми проверку
 */

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

// underscore
console.log("und.filter(users, function(o) {return !o.active})", und.filter(users, function(o) {return !o.active}));
console.log("und.filter(users, { 'age': 36, 'active': true })", und.filter(users, { 'age': 36, 'active': true }));
console.log("und.filter(users, ['active', false])", und.filter(users, ['active', false])); // []
console.log("und.filter(users, 'active')", und.filter(users, 'active'));

// lodash
console.log("lod.filter(users, function(o) {return !o.active})", lod.filter(users, function(o) {return !o.active}));
console.log("lod.filter(users, { 'age': 36, 'active': true })", lod.filter(users, { 'age': 36, 'active': true }));
console.log("lod.filter(users, ['active', false])", lod.filter(users, ['active', false]));
console.log("lod.filter(users, 'active')", lod.filter(users, 'active'));

// es6
console.log("users.filter(el => !el.active)", users.filter(el => !el.active));
console.log("users.filter(el => el['age'] == 36 && el['active'] === true)", users.filter(el => el['age'] == 36 && el['active'] === true));
console.log("users.filter(el => el['active'] === false)", users.filter(el => el['active'] === false));
console.log("users.filter(el => el['active'])", users.filter(el => el['active']));
