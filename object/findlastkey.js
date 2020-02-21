const und = require('underscore');
const lod = require('lodash');

/**
 * pickBy - создаёт объект удовлетворяющим свойствам переданной функции
 */

var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

// lodash
console.log("lod.findLastKey(users, function(o) { return o.age < 40; })", lod.findLastKey(users, function(o) { return o.age < 40; }));
console.log("lod.findLastKey(users, { 'age': 36, 'active': true })", lod.findLastKey(users, { 'age': 36, 'active': true }));
console.log("lod.findLastKey(users, ['active', false])", lod.findLastKey(users, ['active', false]));
console.log("lod.findLastKey(users, 'active')", lod.findLastKey(users, 'active'));

// es6
function findLastKey(obj, value) {
	let arrObj = Object.entries(obj).reverse();
	obj = Object.fromEntries(arrObj);
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

console.log("findLastKey(users, (o) => o.age < 40)", findLastKey(users, (o) => o.age < 40));
console.log("findLastKey(users, { 'age': 36, 'active': true })", findLastKey(users, { 'age': 36, 'active': true }));
console.log("findLastKey(users, ['active', false])", findLastKey(users, ['active', false]));
console.log("findLastKey(users, 'active')", findLastKey(users, 'active'));
