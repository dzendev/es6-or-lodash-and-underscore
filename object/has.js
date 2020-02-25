const und = require('underscore');
const lod = require('lodash');

/**
 * has - проверяет есть ли собственное свойство в объекте
 */

var object = { 'a': { 'b': 2 } };
var other = lod.create({ 'a': lod.create({ 'b': 2 }) });

// lodash
console.log("lod.has(object, 'a')", lod.has(object, 'a'));
console.log("lod.has(object, 'a.b')", lod.has(object, 'a.b'));
console.log("lod.has(other, 'a')", lod.has(other, 'a'));
console.log("lod.has(object, ['a', 'b'])", lod.has(object, ['a', 'b']));

// es6
console.log("object.hasOwnProperty('a')", object.hasOwnProperty('a'));
console.log("object.a.hasOwnProperty('c')", object.a.hasOwnProperty('c'));
console.log("other.hasOwnProperty('a')", other.hasOwnProperty('a'));
