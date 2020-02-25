const und = require('underscore');
const lod = require('lodash');

/**
 * invoke - вызывает метод объекта
 */

var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };

// lodash
console.log("lod.invoke(object, 'a[0].b.c.slice', 1, 3)", lod.invoke(object, 'a[0].b.c.slice', 1, 3));

// es6
console.log("object.a[0].b.c.slice(1, 3)", object.a[0].b.c.slice(1, 3));
