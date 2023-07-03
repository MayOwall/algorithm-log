const [row1, row2] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

const [N, k] = row1.split(" ");
const nums = row2
  .split(" ")
  .sort((a, b) => b - a)
  .slice();

const cut = nums.slice(0, k);
console.log(cut[cut.length - 1] * 1);
