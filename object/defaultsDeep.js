const und = require('underscore');
const lod = require('lodash');

/**
 * defaults - присваивает первому объекту свойства из других объектов, которых нет в объекте
 */

// lodash
console.log("lod.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } })", lod.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } }));

// es6
function defaultsDeep(object, ...objects) {
	let obj = Object.assign({}, object);
	objects.forEach(o => {
		for (let prop in o) {
			if (o.hasOwnProperty(prop)) {
				// if(prop in obj) break;
				if(typeof o[prop] === 'object' && o[prop] !== null) {
					obj[prop] = Object.assign(o[prop], obj[prop]);
				} else {
					obj[prop] = o[prop];
				}
			}
		}
	});
	return obj;
}

console.log("defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } })", defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } }));
