const und = require('underscore');
const lod = require('lodash');

/**
 * meanBy - среднее значение массива состоящее из объектов
 * _.meanBy({ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }) -> 5
 */

var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

// lodash
console.log("lod.meanBy(objects, 'n')", lod.meanBy(objects, 'n'));

// es6
console.log("objects.reduce((sum, current) => sum + current.n, 0) / objects.length", objects.reduce((sum, current) => sum + current.n, 0) / objects.length);