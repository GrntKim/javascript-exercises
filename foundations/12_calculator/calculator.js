const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, cur) => acc * cur);
};

const power = function(base, n) {
  return base**n;
};

const factorial = function(n) {
  if (!n) return 1;
  let ret = n;
  while(--n) ret *= n;
  return ret;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
