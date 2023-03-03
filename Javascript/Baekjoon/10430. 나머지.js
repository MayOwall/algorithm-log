const fs = require("fs");
const [A, B, C] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => Number(v));

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
