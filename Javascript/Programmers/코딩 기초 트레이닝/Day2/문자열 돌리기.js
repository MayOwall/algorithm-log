const str = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

str.forEach((v) => console.log(v));
