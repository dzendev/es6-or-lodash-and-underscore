const und = require('underscore');
const lod = require('lodash');

/**
 * curry - каррирование
 */

// lodash
function greet(greeting, name) {
  return greeting + ' ' + name;
}

// var sayHelloTo = lod.partial(greet, 'hello');
// console.log("sayHelloTo('fred')", sayHelloTo('fred'));
// var greet = lod.partial(greet, 'hello', 'fred');
// console.log("greet()", greet());
// var greetFred = lod.partial(greet, lod, 'fred');
// console.log("greetFred('hi')", greetFred('hi'));

// es6
function partial(fn, ...args) {
	return function(...args2){
		return fn.apply(this, [...args, ...args2]);
	};
}

var sayHelloTo2 = partial(greet, 'hello');
console.log("sayHelloTo2('fred')", sayHelloTo2('fred'));
var greet2 = partial(greet, 'hello', 'fred');
console.log("greet2()", greet2());

