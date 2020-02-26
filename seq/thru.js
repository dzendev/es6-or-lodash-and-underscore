const und = require('underscore');
const lod = require('lodash');

/**
 * thru
 */

// lodash
var thru = lod('  abc  ')
 .chain()
 .trim()
 .thru(function(value) {
   return [value];
 })
 .value();
console.log("thru", thru);

// es6
console.log("['  abc  '.trim()]", ['  abc  '.trim()]);