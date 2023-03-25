const [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => v * 1)
  .sort((a, b) => a - b);

a + b > c ? console.log(a + b + c) : console.log(2 * (a + b) - 1);
