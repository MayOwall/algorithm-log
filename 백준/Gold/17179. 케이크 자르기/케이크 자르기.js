const [num, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, L] = num.split(" ").map((v) => v * 1);
const S = inputs.slice(0, M).map((v) => v * 1);
const Q = inputs.slice(M).map((v) => v * 1);
S.push(L);

const getMaxMin = (q) => {
  let answer = 0;
  let left = 0;
  let right = L;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const isCuttable = checkCuttable(mid, q);
    if (isCuttable) {
      answer = answer > mid ? answer : mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
};

const checkCuttable = (min, q) => {
  let prev = 0;
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] - prev >= min) {
      count++;
      prev = S[i];
    }
  }

  return count >= q + 1;
};

const answers = [];

Q.forEach((q) => {
  const answer = getMaxMin(q);
  answers.push(answer);
});

console.log(answers.join("\n"));
