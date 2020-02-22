const und = require('underscore');
const lod = require('lodash');

/**
 * forOwnRight - перебирает объект в обратном порядке без наследуемых свойств
 */

function Foo() {
	this.a = 1;
	this.b = 2;
}

Foo.prototype.c = 3;

// lodash
lod.forOwnRight(new Foo, function(value, key) {
	console.log(key, value);
});

// es6
let obj = new Foo();

function forOwnRight(obj, fn) {
	let arr = [];
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			arr.push([prop, obj[prop]]);
		}
	}
	arr.reverse().forEach(el => fn(el[1], el[0]));
}

forOwnRight(new Foo, function (value, key) {
	console.log(key, value);
});
