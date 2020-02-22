const und = require('underscore');
const lod = require('lodash');

/**
 * functionsIn - создаёт массив из ключей объекта включая наследуемые
 */

function Foo() {
  this.a = lod.constant('a');
  this.b = lod.constant('b');
}

Foo.prototype.c = lod.constant('c');

// lodash
console.log("lod.functionsIn(new Foo)", lod.functionsIn(new Foo));

// es6
function functionsIn(obj) {
	let arr = [];
	for (let prop in obj) {
		arr.push(prop);
	}
	return arr;
}

console.log("functionsIn(new Foo)", functionsIn(new Foo));