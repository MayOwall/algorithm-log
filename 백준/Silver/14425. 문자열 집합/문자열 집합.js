const [num, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = num.split(" ");

const S = inputs.slice(0, N * 1).reduce((acc, cur) => {
  acc[cur] = true;
  return acc;
}, {});

const targets = inputs.slice(N * 1, N * 1 + M * 1).filter((v) => S[v]);

console.log(targets.length);
