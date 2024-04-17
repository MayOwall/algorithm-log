// input값을 이중 배열 형태로 받는다.
let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
inputs = inputs.map((v) => v.split(""));

// input값에 대해 내부 압축 값을 구하는 쿼드트리 함수를 실행한 값을 출력한다.
const result = getQuadTree(inputs);
console.log(result);

// 쿼드 트리 구하기 (arr)
function getQuadTree(arr) {
  // arr의 길이가 1이라면 arr[0][0]을 리턴한다.
  if (arr.length === 1) {
    return arr[0][0];
  }

  // arr의 길이가 2 이상이라면

  // arr의 길이의 절반인 수인 n을 구한다.
  const n = arr.length / 2;

  // n을 기준으로 arr을 4사분면으로 나눈 후, 각 4분면에 대해 쿼드트리를 재귀한다.
  const q1 = getQuadTree(arr.slice(0, n).map((v) => v.slice(n)));
  const q2 = getQuadTree(arr.slice(n).map((v) => v.slice(n)));
  const q3 = getQuadTree(arr.slice(n).map((v) => v.slice(0, n)));
  const q4 = getQuadTree(arr.slice(0, n).map((v) => v.slice(0, n)));

  // 4사분면의 값이 모두 1 또는 0이라면 해당 문자열만 리턴한다.
  const sum = [...new Set([q1, q2, q3, q4])];
  if (sum.length === 1 && (sum[0] === "1" || sum[0] === "0")) {
    return q1;
  }

  // 그 이외에는 (4사분면, 1사분면, 3사분면, 2사분면) 형태로 리턴한다.
  return `(${q4}${q1}${q3}${q2})`;
}
