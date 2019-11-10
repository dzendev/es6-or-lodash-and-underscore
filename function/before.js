const und = require('underscore');
const lod = require('lodash');

/**
 * before - только ограниченное количество раз можно вызвать
 */

// lodash
var befF =  lod.before(3, function () {
	console.log('lod.before');
});
befF();
befF();
befF();

// es6
function beforeFunc() {
	console.log('before');
}

function before(callback, funCallLength = 1) {
	var callLength = 1;

	return function (){
		if(callLength < funCallLength) {
			callLength++;
			return callback();
		}
	};
}

var bF = before(beforeFunc, 3);
bF();
bF();
bF();
