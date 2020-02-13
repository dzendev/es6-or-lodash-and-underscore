const und = require('underscore');
const lod = require('lodash');

/**
 * escape - преобразует символы "&", "<", ">", '"', "'" в HMLL спецсимволы
 */

// lodash
console.log(`lod.escape(\" & < > \\ ' текст text\")`, lod.escape(" & < > \\ ' текст text"));

// es6

// Вариант 1
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
console.log(`escape(\" & < > \\ ' текст text\")`, escape(" & < > \\ ' текст text"));

// Вариант 2 - работает только в браузере
function htmlentities(str) {
	var textarea = document.createElement("textarea");
	textarea.innerHTML = str;
	return textarea.innerHTML;
}
// console.log(`htmlentities(" & < > \\ ' текст text")`, htmlentities('\" & < > \' текст text'));

// Вариант 3
function htmlspecialchars(str) {
	var map = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;" // ' -> &apos; for XML only
	};
	return str.replace(/[&<>"']/g, function(m) { return map[m]; });
}
console.log(`htmlspecialchars(" & < > \\ ' текст text")`, htmlspecialchars('\" & < > \' текст text'));
