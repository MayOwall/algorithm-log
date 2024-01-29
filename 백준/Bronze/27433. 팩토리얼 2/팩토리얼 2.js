const N = require("fs").readFileSync("/dev/stdin").toString().trim() * 1;

if (N === 0) return console.log(1);

const getFactorial = (n) => {
  return n * (n - 1 ? getFactorial(n - 1) : 1);
};

console.log(getFactorial(N));
