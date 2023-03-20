const inputs = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

let sum = 0;
let scoreSum = 0;
const chart = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

inputs.forEach((v) => {
  const [_, num, score] = v.split(" ");
  if (score === "P") return;

  sum = sum + Number(num);
  scoreSum = scoreSum + chart[score] * Number(num);
});

console.log(scoreSum / sum);
