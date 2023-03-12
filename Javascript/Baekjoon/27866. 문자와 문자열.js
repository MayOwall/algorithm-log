const [word, num] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

console.log(word[num - 1]);
