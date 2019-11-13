const und = require('underscore');
const lod = require('lodash');

/**
 * inRange - проверяет входит ли число в заданный диапазон
 * Функция может работать неправильно _.inRange(-4, 8)
 * так как значение переменной по умолчанию start=0
 */

// lodash
console.log("lod.inRange(4, 8)", lod.inRange(4, 8));
console.log("lod.inRange(-4, 8)", lod.inRange(-4, 8)); // -4 меньше 8 но возвращает false
console.log("lod.inRange(3, 2, 4)", lod.inRange(3, 2, 4));
console.log("lod.inRange(4, 2)", lod.inRange(4, 2));
console.log("lod.inRange(2, 2)", lod.inRange(2, 2));
console.log("lod.inRange(-3, -2, -6)", lod.inRange(-3, -2, -6));

// es6
function inRange(num, start, end){
	// если end меньше start, поменять переменные местами
	if(end < start) [start, end] = [end, start];
	if(arguments.length == 2) {
		if(num < start) return true;
	}
	if(arguments.length == 3) {
		if(num > start && num < end) return true;
	}
	return false;
}

console.log("inRange(4, 8)", inRange(4, 8));
console.log("inRange(-4, 8)", inRange(-4, 8));
console.log("inRange(3, 2, 4)", inRange(3, 2, 4));
console.log("inRange(4, 2)", inRange(4, 2));
console.log("inRange(2, 2)", inRange(2, 2));
console.log("inRange(-3, -2, -6)", inRange(-3, -2, -6));