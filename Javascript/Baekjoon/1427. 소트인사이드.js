const nums = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("");
console.log(nums.sort((a, b) => b - a).join(""));
