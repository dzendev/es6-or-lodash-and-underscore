const und = require('underscore');
const lod = require('lodash');

/**
 * assign - используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект.
 */

function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

console.log("lod.assign({ 'a': 0 }, new Foo, new Bar)", lod.assign({ 'a': 0 }, new Foo, new Bar));

// es6
console.log("Object.assign({ 'a': 0 }, new Foo, new Bar)", Object.assign({ 'a': 0 }, new Foo, new Bar));
