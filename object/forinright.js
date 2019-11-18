const und = require('underscore');
const lod = require('lodash');

/**
 * forInRight - перебирает объект в обратном порядке
 */

function Foo() {
	this.a = 1;
	this.b = 2;
}

Foo.prototype.c = 3;

// lodash
lod.forInRight(new Foo, function(value, key) {
	console.log(key, value);
});

// es6
function forInRight(obj, fn) {
	let arr = [];
	for (let prop in obj) {
		arr.push([prop, obj[prop]]);
	}
	arr.reverse().forEach(el => fn(el[1], el[0]));
}

forInRight(new Foo, function (value, key) {
	console.log(key, value);
});