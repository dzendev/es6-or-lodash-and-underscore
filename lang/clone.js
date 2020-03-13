const und = require('underscore');
const lod = require('lodash');

/**
 * clone - копирование объектов, все вложенные объекты или массивы будут скопированы "по ссылке"
 */

var objects = [{ 'a': 1 }, { 'b': 2 }];

// underscore
var ext = und.extend(objects);
var clone = und.clone(objects);
console.log(ext[0] === objects[0]);
console.log(clone[0] === objects[0]);

// lodash
var deep = lod.clone(objects);
console.log(deep[0] === objects[0]);

// es6
var newObjects = [...objects];
var newObjects2 = Object.assign([], objects);
console.log(newObjects[0] === objects[0]);
console.log(newObjects2[0] === objects[0]);
