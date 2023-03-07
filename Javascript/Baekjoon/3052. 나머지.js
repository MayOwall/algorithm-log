const arr = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v % 42);

console.log(new Set(arr).size);
