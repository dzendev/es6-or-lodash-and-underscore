const und = require('underscore');
const lod = require('lodash');

/**
 * round - округляет число до ближайшего числа
 */

// lodash
console.log("lod.round(4.006)", lod.round(4.006));
console.log("lod.round(6.004, 2)", lod.round(6.004, 2));
console.log("lod.round(6040, -2)", lod.round(6040, -2));

// es6
function round(value, decimals) {
	if(decimals === undefined)
		return Number(Math.round(value));
	else
		return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

console.log("round(4.006)", round(4.006));
console.log("round(6.004, 2)", round(6.004, 2));
console.log("round(6040, -2)", round(6040, -2)); // NaN

// Решение с MDN
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/round
(function() {
	/**
	 * Корректировка округления десятичных дробей.
	 *
	 * @param {String}  type  Тип корректировки.
	 * @param {Number}  value Число.
	 * @param {Integer} exp   Показатель степени (десятичный логарифм основания корректировки).
	 * @returns {Number} Скорректированное значение.
	 */
	function decimalAdjust(type, value, exp) {
		// Если степень не определена, либо равна нулю...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		// Если значение не является числом, либо степень не является целым числом...
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}
		// Сдвиг разрядов
		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
		// Обратный сдвиг
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

	// Десятичное округление к ближайшему
	if (!Math.round10) {
		Math.round10 = function(value, exp) {
			return decimalAdjust('round', value, exp);
		};
	}
	// Десятичное округление вниз
	if (!Math.floor10) {
		Math.floor10 = function(value, exp) {
			return decimalAdjust('floor', value, exp);
		};
	}
	// Десятичное округление вверх
	if (!Math.ceil10) {
		Math.ceil10 = function(value, exp) {
			return decimalAdjust('ceil', value, exp);
		};
	}
})();

console.log("Math.round10(4.006)", Math.round10(4.006));
console.log("Math.round10(6.004, -2)", Math.round10(6.004, -2));
console.log("Math.round10(6040, 2)", Math.round10(6040, 2));
