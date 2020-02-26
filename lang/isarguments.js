const und = require('underscore');
const lod = require('lodash');

/**
 * isArguments - проверяет является ли выражение arguments
 */

// lodash
console.log("lod.isArguments(function() { return arguments; }())", lod.isArguments(function() { return arguments; }()));
console.log("lod.isArguments([1, 2, 3])", lod.isArguments([1, 2, 3]));

// es6
function isArguments(arg) {
	if(Object.prototype.toString.call(arg) === '[object Arguments]') return true;
	else return false;
}
console.log("isArguments(function() { return arguments; }())", isArguments(function() { return arguments; }()));
console.log("isArguments([1, 2, 3])", isArguments([1, 2, 3]));
