const und = require('underscore');
const lod = require('lodash');

/**
 * template -
 */

// lodash
var compiled1 = lod.template('hello <%= user %>!');
console.log("compiled1({ 'user': 'fred' })", compiled1({ 'user': 'fred' }));

var compiled2 = lod.template('<b><%- value %></b>');
console.log("compiled2({ 'value': '<script>' })", compiled2({ 'value': '<script>' }));

var compiled3 = lod.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
console.log("compiled3({ 'users': ['fred', 'barney'] })", compiled3({'users': ['fred', 'barney'] }));

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

console.log("`hello ${\"fred\"}!`", `hello ${"fred"}!`);

console.log("`${['fred', 'barney'].map((el)=> '<li>'+el+'</li>').join('')}`", `${['fred', 'barney'].map((el)=> '<li>'+el+'</li>').join('')}`);

console.log("`<b>${escape('<script>')}</b>`", `<b>${escape('<script>')}</b>`);