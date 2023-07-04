const [_, ...nums] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

nums.sort((a, b) => a - b).forEach((v) => console.log(v));
