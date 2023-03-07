const [_, arr, num] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .split("\n");

const answer = arr.split(" ").filter((v) => v === num).length;

console.log(answer);
