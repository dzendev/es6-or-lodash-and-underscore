const und = require('underscore');
const lod = require('lodash');

/**
 * isRegExp - проверяет является ли выражение регулярным выражением
 */

// lodash
console.log("lod.isRegExp(/abc/)", lod.isRegExp(/abc/));
console.log("lod.isRegExp('/abc/')", lod.isRegExp('/abc/'));

// es6
let re = /abc/;
console.log("re instanceof RegExp", re instanceof RegExp);
console.log("re.constructor === RegExp", re.constructor === RegExp);
let str = '/abc/';
console.log("str instanceof RegExp", str instanceof RegExp);
console.log("str.constructor === RegExp", str.constructor === RegExp);
