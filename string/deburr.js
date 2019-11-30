const und = require('underscore');
const lod = require('lodash');

/**
 * deburr - нормализации юникод строки
 */

// lodash
console.log("lod.deburr('déjà vu')", lod.deburr('déjà vu'));
console.log("lod.deburr('ąśćńżółźćę')", lod.deburr('ąśćńżółźćę'));

// es6
function deburr(str) {
	str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	return str.replace(/\u0142/g, "l");
}

console.log("deburr('déjà vu')", deburr('déjà vu'));
console.log("deburr('ąśćńżółźćę')", deburr('ąśćńżółźćę'));

// https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/18391901 - ещё примеры