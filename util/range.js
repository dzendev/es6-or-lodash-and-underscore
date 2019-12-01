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
	if(arguments.length === 1){
		if(arguments[0] === 0) return [];
		if(start > 0)
			return Array.from({ length: Math.abs(start) }, (v, k) => k);
		else
			return Array.from({ length: Math.abs(start) }, (v, k) => k).map((e, i) => -i);
	}
	if(arguments.length === 2){
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
	if(arguments.length >= 3){
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
}

console.log("range(4)", range(4));
console.log("range(-4)", range(-4));
console.log("range(1, 5)", range(1, 5));
console.log("range(1, -5)", range(1, -5));
console.log("range(0, 20, 5)", range(0, 20, 5));
console.log("range(0, -4, -1)", range(0, -4, -1));
console.log("range(1, 4, 0)", range(1, 4, 0));
console.log("range(0, 4, 0)", range(0, 4, 0));
console.log("range(0)", range(0));