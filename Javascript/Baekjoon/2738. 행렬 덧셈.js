const [num, ...cases] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

const [r, _] = num.split(" ");
const answer = cases.slice(0, r).map((v, i) => {
  const cur = v.split(" ");
  const add = cases[i + Number(r)].split(" ");
  return cur.map((n, i) => Number(n) + Number(add[i])).join(" ");
});

console.log(answer.join("\n"));
