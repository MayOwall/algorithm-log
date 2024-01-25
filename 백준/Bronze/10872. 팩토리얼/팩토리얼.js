const N = require("fs").readFileSync("/dev/stdin").toString().trim();
const factorial = (n) => (n ? n * factorial(n - 1) : 1);
console.log(factorial(Number(N)));
