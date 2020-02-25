const und = require('underscore');
const lod = require('lodash');

/**
 * hasIn - проверяет есть ли свойство в объекте
 */

var object = lod.create({ 'a': lod.create({ 'b': 2 }) });

// lodash
console.log("lod.hasIn(object, 'a')", lod.hasIn(object, 'a'));
console.log("lod.hasIn(object, 'a.b')", lod.hasIn(object, 'a.b'));
console.log("lod.hasIn(object, 'b')", lod.hasIn(object, 'b'));

// es6
console.log("'a' in object", 'a' in object);
console.log("'b' in object.a", 'b' in object.a);
console.log("'b' in object", 'b' in object);
