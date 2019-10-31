const und = require('underscore');
const lod = require('lodash');

/**
 * sortedUniq - возвращает массив уникальных элементо,
 * оптимизировано для отсортированных массивов
 * _.sortedUniq(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c') -> 'b'
 */

const arr = [1, 1, 2, 2, 3, 4, 4];

// lodash
console.log("lod.sortedUniq(arr)", lod.sortedUniq(arr));

// es6
console.log("[...new Set(arr)]", [...new Set(arr)]);
