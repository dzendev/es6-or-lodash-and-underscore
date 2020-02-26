const und = require('underscore');
const lod = require('lodash');

/**
 * chain - позволяет создавать цепочки вызовов
 */

var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

// lodash
var youngest = lod
  .chain(users)
  .sortBy('age')
  .map(function(o) {
    return o.user + ' is ' + o.age;
  })
  .head()
  .value();
console.log("youngest", youngest);

// es6
var youngest2 = users.sort((a, b) => a.age - b.age).map(el => el.user + ' is ' + el.age)[0]
console.log("youngest2", youngest2);
