const sumAll = function (a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return "ERROR";
  }
  if (a < 0 || b < 0) {
    return "ERROR";
  }
  num = 0;
  c = Math.min(a, b);
  d = Math.max(a, b);
  for (i = c; i <= d; i++) {
    num += i;
  }
  return num;
};

// Do not edit below this line
module.exports = sumAll;
