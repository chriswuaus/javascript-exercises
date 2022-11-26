const repeatString = function (string, number) {
  if (number == 0) {
    return "";
  }
  if (number < 0) {
    return "ERROR";
  }
  let frag = string;
  for (let i = 1; i < number; i++) {
    string += frag;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
