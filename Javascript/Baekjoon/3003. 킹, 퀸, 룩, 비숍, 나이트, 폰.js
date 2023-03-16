const arr = [1, 1, 2, 2, 2, 8];
const inputs = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split(" ");

const answer = inputs.map((v, idx) => arr[idx] - v).join(" ");
console.log(answer);
