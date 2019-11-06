const und = require('underscore');
const lod = require('lodash');

/**
 * sum - сумма всех элементов массива состоящего из объектов
 * _.sum([4, 2, 8, 6]) -> 20
 */

var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

// lodash
console.log("lod.sumBy(objects, function(o) { return o.n; })", lod.sumBy(objects, function(o) { return o.n; }));
console.log("lod.sumBy(objects, 'n')", lod.sumBy(objects, 'n'));

// es6
console.log("objects.reduce((sum, current) => sum + current.n, 0)", objects.reduce((sum, current) => sum + current.n, 0));
