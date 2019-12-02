const und = require('underscore');
const lod = require('lodash');

/**
 * range - возвращает массив возврастающих чисел
 */

// lodash
console.log("lod.range(4)", lod.range(4));
console.log("lod.range(-4)", lod.range(-4));
console.log("lod.range(1, 5)", lod.range(1, 5));
console.log("lod.range(1, -5)", lod.range(1, -5));
console.log("lod.range(0, 20, 5)", lod.range(0, 20, 5));
console.log("lod.range(0, -4, -1)", lod.range(0, -4, -1));
console.log("lod.range(1, 4, 0)", lod.range(1, 4, 0));
console.log("lod.range(0, 4, 0)", lod.range(0, 4, 0));
console.log("lod.range(0)", lod.range(0));

// es6
function range(start, length, index=1) {
	function f1(length) {
		if(length > 0) {
			return Array.from({ length: Math.abs(length) }, (v, k) => k);
		} else if(length < 0) {
			return Array.from({ length: Math.abs(length) }, (v, k) => -k);
		} else {
			return [];
		}
	}

	function f2(start, length) {
		let ind = start;
		let arr = [];
		while(ind !== length){
			arr.push(ind);
			if(length > 0)
				ind++;
			else
				ind--;
		}
		return arr;
	}

	function f3(start, length, index) {
		let i = start;
		let ind = start;
		let arr = [];
		while(i < Math.abs(length) && ind < Math.abs(length)){
			i = i + 1;
			arr.push(ind);
			ind += index;
		}
		return arr;
	}

	switch(arguments.length) {
		case 1:
			return f1(start);
			break;
		case 2:
			return f2(start, length);
			break;
		default:
			return f3(start, length, index);
	}
}

console.log("range(4)", range(4));
console.log("range(-4)", range(-4));
console.log("range(1, 5)", range(1, 5));
console.log("range(1, -5)", range(1, -5));
console.log("range(0, 20, 5)", range(0, 20, 5));
console.log("range(0, -4, -1)", range(0, -4, -1));
console.log("range(0, 4, 1)", range(0, 4, 1));
console.log("range(1, 5, 1)", range(1, 5, 1));
console.log("range(1, 4, 0)", range(1, 4, 0));
console.log("range(0, 4, 0)", range(0, 4, 0));
console.log("range(0)", range(0));