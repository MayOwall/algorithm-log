const nums = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => v.split("").reverse().join("") * 1);

console.log(Math.max(...nums));
