const und = require('underscore');
const lod = require('lodash');

/**
 * tap
 */

// lodash
var tap = lod([1, 2, 3])
 .tap(function(array) {
// Mutate input array.
   array.pop();
 })
 .reverse()
 .value();
console.log("tap", tap);

// es6
class Chain {
	constructor(value){
		this.value = value;
	}
	tap(fn) {
		fn(this.value);
		return this.value;
	}
}

var tap2 = new Chain([1, 2, 3])
	.tap(function(array){
		array.pop();
	})
	.reverse();
console.log('tap2', tap2);