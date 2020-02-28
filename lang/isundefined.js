const und = require('underscore');
const lod = require('lodash');

/**
 * isUndefined - проверяет является ли выражение undefined
 */

// lodash
console.log("lod.isUndefined(void 0)", lod.isUndefined(void 0));
console.log("lod.isUndefined(null)", lod.isUndefined(null));

// es6
console.log("void 0 === undefined", void 0 === undefined);
console.log("null === undefined", null === undefined);
