const removeFromArray = function (array, ...elem) {
  index = [];

  for (i = 0; i < array.length; i++) {
    for (j = 0; j < elem.length; j++) {
      if (array[i] === elem[j]) {
        array.splice(i, 1);
        i -= 1;
        break;
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
