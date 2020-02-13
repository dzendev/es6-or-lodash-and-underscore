const und = require('underscore');
const lod = require('lodash');

/**
 * escape - преобразует символы "&", "<", ">", '"', "'" в HMLL спецсимволы
 */

// lodash
console.log("lod.escape('fred, barney, & pebbles')", lod.escape('fred, barney, & pebbles'));
console.log("lod.escape('fred, barney, < pebbles')", lod.escape('fred, barney, < pebbles'));
console.log("lod.escape('fred, barney, > pebbles')", lod.escape('fred, barney, > pebbles'));
console.log("lod.escape('fred, barney, \" pebbles')", lod.escape('fred, barney, " pebbles'));
console.log("lod.escape(\"fred, barney, ' pebbles\")", lod.escape("fred, barney, ' pebbles"));

// es6
function escape(str) {
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
	return str;
}
console.log("escape('fred, barney, & pebbles')", escape('fred, barney, & pebbles'));
console.log("escape('fred, barney, < pebbles')", escape('fred, barney, < pebbles'));
console.log("escape('fred, barney, > pebbles')", escape('fred, barney, > pebbles'));
console.log("escape('fred, barney, \" pebbles')", escape('fred, barney, " pebbles'));
console.log("escape(\"fred, barney, ' pebbles\")", escape("fred, barney, ' pebbles"));