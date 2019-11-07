const und = require('underscore');
const lod = require('lodash');

/**
 * forIn - перебирает объект
 * _.forIn(6, 4) -> 24
 */

function Foo() {
	this.a = 1;
	this.b = 2;
}

Foo.prototype.c = 3;

// lodash
lod.forIn(new Foo, function(value, key) {
	console.log(key, value);
});

// es6
let obj = new Foo();

for (let key in obj) {
	console.log(key, obj[key]);
}