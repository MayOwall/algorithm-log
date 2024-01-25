const [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => v * 1);

const up = (n, k, c) => (c < k ? n * up(n - 1, k, c + 1) : 1);
const down = (k) => (k ? k * down(k - 1) : 1);
const result = up(N, K, 0) / down(K);
console.log(result);
