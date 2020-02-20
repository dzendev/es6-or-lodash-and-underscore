const und = require('underscore');
const lod = require('lodash');

/**
 * defaults - присваивает первому объекту свойства из других объектов, которых нет в объекте
 */

// lodash
console.log("lod.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })", lod.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }));

// es6
function defaults(object, ...objects) {
	let obj = Object.assign({}, object);
	objects.forEach(o => {
		for (let prop in o) {
			if (o.hasOwnProperty(prop)) {
				if(prop in obj) break;
				else obj[prop] = o[prop];
			}
		}
	});
	return obj;
}

console.log("defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })", defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }));
