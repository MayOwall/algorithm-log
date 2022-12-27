// 나의 풀이
const solution = (n) => {
  const arr = [];
  let a = 6;
  let b = n;
  outer: while (true) {
    for (let i = 2; i <= Math.min(a, b); i++) {
      if (!(a % i) && !(b % i)) {
        arr.push(i);
        a = a / i;
        b = b / i;
        continue outer;
      }
    }
    break;
  }

  return [a, b, ...arr].reduce((acc, cur) => acc * cur, 1) / 6;
};

// 더 멋진 풀이

function solution2(n) {
  return (
    Array(6)
      .fill(n)
      .map((v, idx) => (v = v * (idx + 1)))
      .find((v) => v % 6 === 0) / 6
  );
}
