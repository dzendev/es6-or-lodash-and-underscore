const und = require('underscore');
const lod = require('lodash');

/**
 * once - создает функцию, ограниченную одним вызовом
 */

function createApplication(number){
 	return 'application ' + number;
 }

// underscore
var initialize1 = und.once(createApplication);
console.log("initialize1(1)", initialize1(1));
console.log("initialize1(2)", initialize1(2));

// lodash
var initialize2 = lod.once(createApplication);
console.log("initialize2(1)", initialize2(1));
console.log("initialize2(2)", initialize2(2));

// es6
function once(callback){
	let init = null;
	return function(args){
		if(init !== null){
			return init;
		} else {
			init = callback(args);
			return init;
		}
	};
}
var initialize3 = once(createApplication);
console.log("initialize3(1)", initialize3(1));
console.log("initialize3(2)", initialize3(2));