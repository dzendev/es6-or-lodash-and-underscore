const und = require('underscore');
const lod = require('lodash');

/**
 * pickBy - создаёт объект удовлетворяющим свойствам переданной функции
 */

var users = {
  'barney':  { 'age': 36, 'active': true },
  'pebbles': { 'age': 1,  'active': true },
  'fred':    { 'age': 40, 'active': false }
};

// lodash
console.log("lod.findKey(users, function(o) { return o.age < 40; })", lod.findKey(users, function(o) { return o.age < 40; }));
console.log("lod.findKey(users, { 'age': 1, 'active': true })", lod.findKey(users, { 'age': 1, 'active': true }));
console.log("lod.findKey(users, { 'age': 1 })", lod.findKey(users, { 'age': 1, }));
console.log("lod.findKey(users, ['active', false])", lod.findKey(users, ['active', false]));
console.log("lod.findKey(users, 'active')", lod.findKey(users, 'active'));

// es6
function findKey(obj, value) {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if(typeof value === 'function')
				if(value(obj[prop])) return prop;
			if(Array.isArray(value))
				if(obj[prop][value[0]] === value[1]) return prop;
			if(typeof value === 'string')
				if(obj[prop][value] !== undefined) return prop;
			if(Object.prototype.toString.call(value) === "[object Object]") {
				let isEqual = false;
				for (let p in value) {
					if(obj[prop][p] === value[p]) isEqual = true;
					if(isEqual === false) break;
				}
				if(isEqual === true) return prop;
			}
		}
	}
	return false;
}

console.log("findKey(users, (o) => o.age < 40)", findKey(users, (o) => o.age < 40));
console.log("findKey(users, { 'age': 1, 'active': true })", findKey(users, { 'age': 1, 'active': true }));
console.log("findKey(users, { 'age': 1 })", findKey(users, { 'age': 1 }));
console.log("findKey(users, ['active', false])", findKey(users, ['active', false]));
console.log("findKey(users, 'active')", findKey(users, 'active'));
