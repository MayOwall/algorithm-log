const inputs = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

const max = Math.max(...inputs.map((v) => v.length));
let answer = "";

for (let i = 0; i < max; i++) {
  const temp = inputs.map((v) => v[i] || "").join("");
  answer += temp;
}

console.log(answer);
