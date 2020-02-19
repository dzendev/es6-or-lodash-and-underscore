const und = require('underscore');
const lod = require('lodash');

/**
 * wrap - создает функцию обёртку
 */

// lodash
var p = lod.wrap(lod.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});

console.log("p('fred, barney, & pebbles')", p('fred, barney, & pebbles'));

// es6
function escape(tag, str) {
	let arr = [
		["&", "&amp;"],
		["<", "&lt;"],
		[">", "&gt;"],
		['"', "&quot;"],
		["'", "&#39;"]
	];
	arr.forEach((el, index) => {
		str = str.replace(el[0], el[1]);
	});
	return `${tag[0]}${str}${tag[1]}`;
}

var output = escape`<p>${'fred, barney, & pebbles'}</p>`;
console.log("output", output);