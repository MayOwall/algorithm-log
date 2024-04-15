let [N, numbers, M, targets] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

numbers = numbers
  .split(" ")
  .map((v) => v * 1)
  .sort((a, b) => a - b);
targets = targets.split(" ").map((v) => v * 1);

const isExist = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    const midIdx = Math.floor((right + left) / 2);
    const mid = numbers[midIdx];
    if (mid === target) return 1;
    if (mid > target) {
      right = midIdx - 1;
      continue;
    }
    left = midIdx + 1;
  }

  return 0;
};

const answers = targets.map(target => isExist(numbers, target));
console.log(answers.join("\n"));
