const [num, ...cases] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

const [basketNum, caseNum] = num.split(" ");
let baskets = Array.from({ length: Number(basketNum) }, (_, i) => i + 1);

for (let i = 0; i < Number(caseNum); i++) {
  const [start, end, mid] = cases[i].split(" ");
  baskets = [
    ...baskets.slice(0, start - 1),
    ...baskets.slice(mid - 1, end),
    ...baskets.slice(start - 1, mid - 1),
    ...baskets.slice(Number(end)),
  ];
}

console.log(baskets.join(" "));
