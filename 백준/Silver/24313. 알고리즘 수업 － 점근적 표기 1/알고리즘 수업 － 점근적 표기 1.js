const [init, c, n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [a, b] = init.split(" ").map((v) => v * 1);

if (a * Number(n) + b <= Number(c) * Number(n) && c >= a) {
  console.log(1);
} else {
  console.log(0);
}
