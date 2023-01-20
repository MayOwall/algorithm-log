// 나의 풀이
const nonTriple = (n) => {
  while (true) {
    if (n % 3 !== 0 && !n.toString().split("").includes("3")) return n;
    n++;
  }
};

const solution = (n) => {
  let i = 1;
  let answer = 0;

  while (i <= n) {
    answer = nonTriple(answer + 1);
    i++;
  }

  return answer;
};

// 더 좋은 풀이

function solution2(n) {
  let arr = [];
  let num = 0;
  while (arr.length !== n && ++num)
    if (num % 3 !== 0 && !("" + num).includes("3")) arr.push(num);
  return arr.pop();
}
