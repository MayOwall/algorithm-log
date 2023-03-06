const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((v) => v.trim());

let total = 0;

for (let i = 0; i < Number(inputs[1]); i++) {
  const [a, b] = inputs[i + 2].split(" ");
  const sum = Number(a) * Number(b);
  total += sum;
}

Number(inputs[0]) === total ? console.log("Yes") : console.log("No");
