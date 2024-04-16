// input을 이중 배열 형태로 구한다.
let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
inputs = inputs.map((v) => v.split(" "));

// 재귀를 통해 색종이를 4분면으로 나누어 하얀색과 파란색의 색종이 수를 구한다.
const counts = search(inputs);
console.log(counts.join("\n"));

// 재귀
function search(arr) {
  // arr의 길이가 1이라면
  if (arr.length === 1) {
    // arr 요소의 색이 파란색(a.k.a 1)이라면 [0, 1]을 리턴한다.
    // arr 요소의 색이 하얀색(a.k.a 0)이라면 [1, 0]을 리턴한다.
    return arr[0][0] == 1 ? [0, 1] : [1, 0];
  }

  // arr의 길이가 1 초과라면
  // arr 배열의 수를 2로 나누어 사분면의 길이를 구한다 (a.k.a n)
  const n = arr.length / 2;

  // n을 바탕으로 각 사분면을 나타내는 배열을 구한다
  const q1 = arr.slice(0, n).map((v) => v.slice(n));
  const q2 = arr.slice(n).map((v) => v.slice(n));
  const q3 = arr.slice(n).map((v) => v.slice(0, n));
  const q4 = arr.slice(0, n).map((v) => v.slice(0, n));

  // 각 사분면에 대해 재귀를 실행하여 내부 흰 종이와 파란 종이의 수를 구한다.
  const sum = [q1, q2, q3, q4].reduce(
    (acc, cur) => {
      const [a, b] = search(cur);
      return [acc[0] + a, acc[1] + b];
    },
    [0, 0]
  );

  // 4개의 면이 모두 하얀색이라면 4분면을 하얀색 한 면으로 합친 수를 리턴한다.
  if (JSON.stringify(sum) === "[4,0]") return [1, 0];
  // 4개의 면이 모두 파란색이라면 4분면을 파란색 한 면 으로 합친 수를 리턴한다.
  if (JSON.stringify(sum) === "[0,4]") return [0, 1];

  // 그 이외의 경우에는 하얀색과 파란색 면의 수을 리턴한다.
  return sum;
}
