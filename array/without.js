const und = require('underscore');
const lod = require('lodash');

/**
 * without - возвращает массив с исключёными элементами
 * _.without([2, 1, 2, 3, 1, 4], 1, 2) -> [ 3, 4 ]
 */

// underscore
console.log("und.without([2, 1, 2, 3, 1, 4], 1, 2)", und.without([2, 1, 2, 3, 1, 4], 1, 2));

// lodash
console.log("lod.without([2, 1, 2, 3, 1, 4], 1, 2)", lod.without([2, 1, 2, 3, 1, 4], 1, 2));

// es6
function without(arr, ...value){
	value.forEach(elem =>{
		arr = arr.filter(item => elem !== item);
	});
	return arr;
}

console.log("without([2, 1, 2, 3, 1, 4], 1, 2)", without([2, 1, 2, 3, 1, 4], 1, 2));
