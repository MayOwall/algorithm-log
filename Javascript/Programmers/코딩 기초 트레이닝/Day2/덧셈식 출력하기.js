const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
console.log(`${a} + ${b} = ${Number(a) + Number(b)}`);

const solution = (sequence, k) => {
  const arr = [];
  sequence.forEach((_, idx) => {
    let sum = 0;
    for (let i = idx; i < sequence.length; i++) {
      sum += sequence[i];
      if (sum === k) {
        arr.push([idx, i]);
        break;
      }
      if (sum > k) break;
    }
  });
  const answer = arr.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  return answer[0];
};
