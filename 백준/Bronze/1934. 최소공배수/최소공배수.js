let [_, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 유클리드 호제법 : 두 수의 차에서 최대공약수를 구할 수 있다.
const getGCD = (a, b) => {
  let result = b;

  while (a % b > 0) {
    result = a % b;
    a = b;
    b = result;
  }

  return result;
};

inputs = inputs.map((v) => {
  const [a, b] = v.split(" ").map((v) => v * 1);

  const n = a > b ? a : b;
  const m = a < b ? a : b;
  const k = getGCD(n, m);

  return (a * b) / k;
});

console.log(inputs.join("\n"));
