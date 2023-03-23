const input = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

const l = input[0].length;
const flat = input.flat();
const max = Math.max(...flat);
let index = flat.indexOf(String(max));

console.log(max);
console.log(Math.floor(index / l) + 1, (index % l) + 1);
