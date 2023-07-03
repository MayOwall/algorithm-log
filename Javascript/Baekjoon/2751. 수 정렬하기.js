const [_, ...nums] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

nums.sort((a, b) => a - b).forEach((v) => console.log(v));
