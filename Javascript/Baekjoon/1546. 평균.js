const [n, scores] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .split("\n");
const scoreArr = scores.split(" ");
const max = Math.max(...scoreArr);
const answer = (
  scoreArr.map((v) => (v / max) * 100).reduce((acc, cur) => acc + cur, 0) / n
)
  .toString()
  .slice(0, 10);

console.log(answer);
