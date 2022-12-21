// 나의 풀이
const solution = (n) => {
  for (let i = 1; i <= 1000; i++) {
    if (i * i === n) return 1;
  }
  return 2;
};

// 조금 더 좋은 풀이
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
