const [x, y, w, h] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split(" ");

console.log(Math.min(x, y, Math.abs(x - w), Math.abs(y - h)));
