const und = require('underscore');
const lod = require('lodash');

/**
 * curry - каррирование
 */

// lodash
function greet(greeting, name) {
  return greeting + ' ' + name;
}

var sayHelloTo = lod.partialRight(greet, 'fred');
console.log("sayHelloTo('hi')", sayHelloTo('hi'));

// es6
function partialRight(fn, ...args) {
	return function(...args2){
		return fn.apply(this, [...args, ...args2].reverse());
	};
}

var sayHelloTo2 = partialRight(greet, 'fred');
console.log("sayHelloTo2('hi')", sayHelloTo2('hi'));

