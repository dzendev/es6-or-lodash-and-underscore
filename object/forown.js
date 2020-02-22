const und = require('underscore');
const lod = require('lodash');

/**
 * forOwn - перебирает объект без наследуемых свойств
 */

function Foo() {
	this.a = 1;
	this.b = 2;
}

Foo.prototype.c = 3;

// lodash
lod.forOwn(new Foo, function(value, key) {
	console.log(key, value);
});

// es6
let obj = new Foo();

for (let key in obj) {
	if (obj.hasOwnProperty(key)) {
		console.log(key, obj[key]);
	}
}
