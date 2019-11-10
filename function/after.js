const und = require('underscore');
const lod = require('lodash');

/**
 * after - выполнить после
 */

// lodash
var saves = ['profile', 'settings'];

var done = lod.after(saves.length, function() {
  console.log('done saving!');
});

lod.forEach(saves, function(type) {
  console.log('_.after');
  done();
});

// es6
function after(callback, funCallLength = 1) {
	var callLength = 1;

	return function (){
		callLength++;
		if(callLength == funCallLength) {
			return callback();
		}
	};
}

function afterFunc() {
	console.log('Done saveing!');
}

var Done = after(afterFunc, 3);

saves.forEach(function(){
	console.log('after');
	Done();
});
