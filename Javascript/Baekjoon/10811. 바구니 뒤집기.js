const inputs = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");
const [basketNum, count] = inputs[0].split(" ").map((v) => Number(v));
let baskets = Array.from({ length: basketNum }, (_, i) => i + 1);

for (let i = 0; i < count; i++) {
  const [left, right] = inputs[i + 1].split(" ");
  const leftArr = baskets.slice(0, left - 1);
  const midArr = baskets.slice(left - 1, right);
  const rightArr = baskets.slice(right);
  baskets = [...leftArr, ...midArr.reverse(), ...rightArr];
}

console.log(baskets.join(" "));
