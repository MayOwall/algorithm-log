let [nums, scores] = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

const [_, cutline] = nums;
const [answer] = scores
  .sort((a, b) => Number(a) - Number(b))
  .slice(scores.length - cutline);

console.log(answer);
