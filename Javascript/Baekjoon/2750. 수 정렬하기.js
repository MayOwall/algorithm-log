const [num, ...cases] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

cases.sort((a, b) => Number(a) - Number(b)).forEach((v) => console.log(v));
