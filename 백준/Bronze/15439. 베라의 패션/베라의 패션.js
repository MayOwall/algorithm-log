const N = require("fs").readFileSync("/dev/stdin").toString().trim();
const answer = N * N - N;
console.log(answer);
