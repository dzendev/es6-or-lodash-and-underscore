const und = require('underscore');
const lod = require('lodash');

/**
 * assignIn - используется для копирования значений всех собственных и наследуемых перечисляемых свойств из одного или более исходных объектов в целевой объект.
 */

function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

console.log("lod.assignIn({ 'a': 0 }, new Foo, new Bar)", lod.assignIn({ 'a': 0 }, new Foo, new Bar));

// es6
function assignIn(...objects) {
	let newObj = {};
	objects.forEach(obj => {
		for (let prop in obj) {
			newObj[prop] = obj[prop];
		}
	});
	return newObj;
}

console.log("assignIn({ 'a': 0 }, new Foo, new Bar)", assignIn({ 'a': 0 }, new Foo, new Bar));