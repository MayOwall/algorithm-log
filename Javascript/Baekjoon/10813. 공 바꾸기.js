const inputs = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .split("\n");
const [basketNum, count] = inputs[0].split(" ").map((v) => Number(v));
const baskets = Array.from({ length: basketNum }, (_, i) => i + 1);

for (let i = 0; i < count; i++) {
  const [a, b] = inputs[i + 1].split(" ").map((v) => Number(v));
  const temp = baskets[b - 1];
  baskets[b - 1] = baskets[a - 1];
  baskets[a - 1] = temp;
}

console.log(baskets.join(" "));
