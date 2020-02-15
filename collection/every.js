const und = require('underscore');
const lod = require('lodash');

/**
 * every - проверяет удовлетворяют ли все элеметы массива условию
 * _.every([true, 1, null, 'yes'], Boolean) -> false
 */

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];

// lodash
console.log("lod.every([true, 1, null, 'yes'], Boolean)", lod.every([true, 1, null, 'yes'], Boolean));
console.log("lod.every(users, { 'user': 'barney', 'active': false })", lod.every(users, { 'user': 'barney', 'active': false }));
console.log("lod.every(users, ['active', false])", lod.every(users, ['active', false]));
console.log("lod.every(users, 'active')", lod.every(users, 'active'));

// es6
console.log("[true, 1, null, 'yes'].every(el => Boolean(el))", [true, 1, null, 'yes'].every(el => Boolean(el)));
console.log("users.every(el => el['user'] === 'barney' && el['active'] === false)", users.every(el => el['user'] === 'barney' && el['active'] === false));
console.log("users.every(el => el['active'] === false)", users.every(el => el['active'] === false));
console.log("users.every(el => el['active'])", users.every(el => el['active']));