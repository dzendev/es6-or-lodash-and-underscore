const und = require('underscore');
const lod = require('lodash');

/**
 * ceil - округляет число в большую сторону
 */

// lodash
console.log("lod.ceil(4.006)", lod.ceil(4.006));
console.log("lod.ceil(6.004, 2)", lod.ceil(6.004, 2));
console.log("lod.ceil(6040, -2)", lod.ceil(6040, -2));

// es6
function ceil(value, decimals) {
	return Number(Math.ceil(value+'e'+decimals)+'e-'+decimals);
}

console.log("ceil(4.006)", ceil(4.006));
console.log("ceil(6.004, 2)", ceil(6.004, 2));
console.log("ceil(6040, -2)", ceil(6040, -2)); // NaN