const leapYears = function (year) {
  a = year % 4;
  b = year % 100;
  c = year % 400;

  return (a == 0 && (b != 0 || c == 0)) == 1;
};

// Do not edit below this line
module.exports = leapYears;
