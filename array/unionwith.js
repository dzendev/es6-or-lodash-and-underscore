const und = require('underscore');
const lod = require('lodash');

/**
 * unionWith - создаёт из запакованного массива один на основе callback
 * _.unionWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]) -> [ { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 } ]
 */

// lodash
var objectsUnionWith = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var othersUnionWith = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
console.log("lod.unionWith(objectsUnionWith, othersUnionWith, lod.isEqual)", lod.unionWith(objectsUnionWith, othersUnionWith, lod.isEqual));

// es6
function equalObject(...objects) {
  var arrEqual = objects.map(function (elem) {
    return Object.entries(elem).sort(function(a, b) {
      if (a[0] > b[0]) {
        return 1;
      }
      if (a[0] < b[0]) {
        return -1;
      }
      return 0;
    });
  });
  return JSON.stringify(arrEqual[0]) == JSON.stringify(arrEqual[1]);
}

function unionWith(obj1, obj2, callback) {
	var arr = Array.from(obj1);

	for(let elem of obj2) {
		let isEqualObject = true;
		for(let item of obj1) {
			if(callback(elem, item)) {
				isEqualObject = false;
				break;
			}
		}
		if(isEqualObject) arr.push(elem);
	}

	return arr;
}

console.log("unionWith(objectsUnionWith, othersUnionWith, equalObject)", unionWith(objectsUnionWith, othersUnionWith, equalObject));