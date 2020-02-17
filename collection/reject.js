const und = require('underscore');
const lod = require('lodash');

/**
 * reject - противополжность _.filter
 */

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

// lodash
console.log("lod.reject(users, function(o) { return !o.active; })", lod.reject(users, function(o) { return !o.active; }));
console.log("lod.reject(users, { 'age': 40, 'active': true })", lod.reject(users, { 'age': 40, 'active': true }));
console.log("lod.reject(users, ['active', false])", lod.reject(users, ['active', false]));
console.log("lod.reject(users, 'active')", lod.reject(users, 'active'));

// es6
console.log("users.filter(o => o.active)", users.filter(o => o.active));
console.log("users.filter(o => o.age != 40 && o.active !== true)", users.filter(o => o.age != 40 && o.active !== true));
console.log("users.filter(o => o.active !== false)", users.filter(o => o.active !== false));
console.log("users.filter(o => !o.active)", users.filter(o => !o.active));