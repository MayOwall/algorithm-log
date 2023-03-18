const input = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("");

if (!input.length) {
  console.log("?");
  return;
}

const obj = {};

input.forEach((cur) => {
  const v = cur.toUpperCase();
  obj[v] ? (obj[v] += 1) : (obj[v] = 1);
});

const maxs = Math.max(...Object.values(obj));
const maxAl = Object.keys(obj).filter((v) => obj[v] === maxs);

console.log(maxAl.length > 1 ? "?" : maxAl[0]);
