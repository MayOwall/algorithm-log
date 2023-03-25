const inputs = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

const x = {};
const y = {};

inputs.forEach((cur) => {
  const [w, h] = cur.split(" ");
  x[w] ? (x[w] += 1) : (x[w] = 1);
  y[h] ? (y[h] += 1) : (y[h] = 1);
});

console.log(
  Object.keys(x).find((v) => x[v] === 1),
  Object.keys(y).find((v) => y[v] === 1)
);
