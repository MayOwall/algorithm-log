const [_, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const answer = input.sort((a, b) => a * 1 - b * 1);

console.log(answer.join("\n"));
