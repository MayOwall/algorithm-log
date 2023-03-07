const [a, b] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .split("\n");

const [_, num] = a.split(" ");
const answer = b
  .split(" ")
  .filter((v) => Number(v) < Number(num))
  .join(" ");
console.log(answer);
