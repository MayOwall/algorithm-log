const inputs = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .split("\n");

const [a, b] = inputs[0].split(" ");
const baskets = Array.from({ length: a }, () => 0);

for (let i = 1; i <= b; i++) {
  const [start, end, num] = inputs[i].split(" ");
  for (let j = start - 1; j < end; j++) {
    baskets[j] = num;
  }
}

console.log(baskets.join(" "));
