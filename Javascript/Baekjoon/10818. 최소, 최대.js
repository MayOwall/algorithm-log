const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[1]
  .split(" ");

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);
