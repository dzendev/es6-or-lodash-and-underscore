const und = require('underscore');
const lod = require('lodash');

/**
 * now - возвращает текущую метку времени
 */

// lodash
console.log("lod.now()", lod.now());
console.log("new Date(lod.now())", new Date(lod.now()));

// es6
console.log("Date.now()", Date.now());
console.log("new Date(Date.now())", new Date(Date.now()));
