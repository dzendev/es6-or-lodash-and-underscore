const und = require('underscore');
const lod = require('lodash');

/**
 * delay - вызывает функцию с задержкой
 */

// underscore
und.delay(function(text) {
	console.log(text);
}, 1000, 'later1');

// lodash
lod.delay(function(text) {
	console.log(text);
}, 1000, 'later2');

// es6
setTimeout(function(text) {
	console.log(text);
}, 1000, 'later3');
