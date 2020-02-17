const und = require('underscore');
const lod = require('lodash');

/**
 * shuffle - алгоритм тасование Фишера—Йетса
 * может быть использован для генерации случайного цикла перестановок длины n
 * _.shuffle([1, 2, 3, 4, 5, 6]) -> random array
 */

// underscore
console.log("und.shuffle([1, 2, 3, 4, 5, 6])", und.shuffle([1, 2, 3, 4, 5, 6]));

// es6
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log("shuffle([1, 2, 3, 4, 5, 6])", shuffle([1, 2, 3, 4, 5, 6]));