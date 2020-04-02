const und = require('underscore');
const lod = require('lodash');

/**
 * find - возвращает первый найденный в массиве элемент
 */

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

// underscore
console.log("und.find(users, function(o) { return o.age < 40; })", und.find(users, function(o) { return o.age < 40; }));
console.log("und.find(users, { 'age': 1, 'active': true })", und.find(users, { 'age': 1, 'active': true }));
console.log("und.find(users, ['active', false])", und.find(users, ['active', false])); // undefined
console.log("und.find(users, 'active')", und.find(users, 'active'));

// lodash
console.log("lod.find(users, function(o) { return o.age < 40; })", lod.find(users, function(o) { return o.age < 40; }));
console.log("lod.find(users, { 'age': 1, 'active': true })", lod.find(users, { 'age': 1, 'active': true }));
console.log("lod.find(users, ['active', false])", lod.find(users, ['active', false]));
console.log("lod.find(users, 'active')", lod.find(users, 'active'));

// es6
console.log("users.find(el => el.age < 40)", users.find(el => el.age < 40));
console.log("users.find(el => el.age == 1 && el.active === true)", users.find(el => el.age == 1 && el.active === true));
console.log("users.find(el => el.active === false)", users.find(el => el.active === false));
console.log("users.find(el => el.active)", users.find(el => el.active));