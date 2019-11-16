const und = require('underscore');
const lod = require('lodash');

/**
 * keys - возвращает ключи объекта
 * _.keys({one: 1, two: 2, three: 3}) -> ["one", "two", "three"]
 */

function Foo() {
	this.a = 1;
	this.b = 2;
}

Foo.prototype.c = 3;

// underscore
console.log("und.keys(new Foo)", und.keys(new Foo));
console.log("und.keys('hi')", und.keys('hi')); // -> []

// lodash
console.log("lod.keys(new Foo)", lod.keys(new Foo));
console.log("lod.keys('hi')", lod.keys('hi'));

// es6
console.log("Object.keys(new Foo)", Object.keys(new Foo));
console.log("Object.keys('hi')", Object.keys('hi'));