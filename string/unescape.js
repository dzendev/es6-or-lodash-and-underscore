const und = require('underscore');
const lod = require('lodash');

/**
 * unescape - преобразует спецсимволы HTML &amp; &lt; &gt; &quot; &#39; в обычные
 */

// lodash
console.log("lod.unescape(\"&amp; &lt; &gt; &quot; &#39; текст text\")", lod.unescape("&amp; &lt; &gt; &quot; &#39; текст text"));

// es6

// Вариант 1
function unescape(str) {
	let arr = [
		["&amp;", "&"],
		["&lt;", "<"],
		["&gt;", ">"],
		["&quot;", '"'],
		["&#39;", "'"]
	];
	arr.forEach((el, index) => {
		str = str.replace(el[0], el[1]);
	});
	return str;
}
console.log("unescape(\"&amp; &lt; &gt; &quot; &#39; текст text\")", unescape("&amp; &lt; &gt; &quot; &#39; текст text"));

// Вариант 2 - работает только в браузере
function htmlentities_decode(str) {
	var textarea = document.createElement("textarea");
	textarea.innerHTML = str;
	return textarea.value;
}
// console.log("htmlentities_decode(\"&amp; &lt; &gt; &quot; &#39; текст text\")", htmlentities_decode("&amp; &lt; &gt; &quot; &#39; текст text"));

// Вариант 3
function htmlspecialchars(str) {
	var map = {
		"&amp;": "&",
		"&lt;": "<",
		"&gt;": ">",
		"&quot;": "\"",
		"&#39;": "'"
	};
	return str.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, function(m) { return map[m]; });
}
console.log("htmlspecialchars(\"&amp; &lt; &gt; &quot; &#39; текст text\")", htmlspecialchars("&amp; &lt; &gt; &quot; &#39; текст text"));
