'use strict';

var arrayChunks = function arrayChunks() {
  var arrayMain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var chunkLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!Array.isArray(arrayMain)) throw new TypeError('Expected array to split');
  if (isNaN(chunkLength)) throw new TypeError('A number was expected as a second parameter');

  if (chunkLength === 0) return [arrayMain];

  var chunkAmount = Math.ceil(arrayMain.length / chunkLength);
  var start = 0,
      newArr = [];

  for (var i = 0; i < chunkAmount; i++) {
    var arrToWork = arrayMain.slice(0);
    newArr.push(arrToWork.splice(start, chunkLength));
    start += chunkLength;
  }

  return newArr;
};

module.exports = arrayChunks;