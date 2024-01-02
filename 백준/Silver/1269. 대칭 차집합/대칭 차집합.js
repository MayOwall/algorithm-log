// 대칭 차집합 구하기
// N 집합, M 집합을 구한다.

const [_, N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

// N과 M 중 더 짧은 집합을 순회하며 교집합을 구한다.

let [short, long] = N.length < M.length ? [N, M] : [M, N];

long = long.reduce((acc, cur) => {
  acc[cur] = true;
  return acc;
}, {});

const intersection = short.filter((v) => long[v]);

// N 집합의 길이와 M 집합의 길이에서 교집합의 길이를 뺀 후 더해준다.
console.log(N.length + M.length - intersection.length * 2);
