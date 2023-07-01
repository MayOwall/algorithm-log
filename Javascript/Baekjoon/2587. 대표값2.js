const getAverage = (nums) =>
  nums.reduce((acc, cur) => acc + Number(cur), 0) / nums.length;

const getMid = (nums) => {
  const sort = nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);
  return sort[mid];
};

const nums = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(getAverage(nums));
console.log(getMid(nums));
