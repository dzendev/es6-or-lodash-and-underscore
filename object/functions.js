const und = require('underscore');
const lod = require('lodash');

/**
 * functions - создаёт массив из ключей объекта
 */

function Foo() {
  this.a = lod.constant('a');
  this.b = lod.constant('b');
}

Foo.prototype.c = lod.constant('c');

// lodash
console.log("lod.functions(new Foo)", lod.functions(new Foo));

// es6
console.log("Object.keys(new Foo)", Object.keys(new Foo));