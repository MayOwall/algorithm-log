const inputs = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

let answer = "";

for (let i = 0; i < inputs.length - 1; i++) {
  const [a, b] = inputs[i].split(" ");
  answer += `${Number(a) + Number(b)}\n`;
}

console.log(answer);
