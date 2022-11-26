const reverseString = function (string) {
  let str = "";

  for (i = string.length; i > 0; i--) {
    str += string[i - 1];
  }
  return str;
};

// Do not edit below this line
module.exports = reverseString;
