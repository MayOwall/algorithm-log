const answer = Array.from({ length: 30 }, () => 0);
require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .split("\n")
  .slice(0, 28)
  .forEach((v) => (answer[v - 1] = 1));

console.log(`${answer.indexOf(0) + 1}\n${answer.lastIndexOf(0) + 1}`);
