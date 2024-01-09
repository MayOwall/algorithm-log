let [_, nums] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

nums = nums.split(" ");

const obj = {};
const set = [...new Set(nums)].sort((a, b) => Number(a) - Number(b));
set.forEach((v, i) => (obj[v] = i));

const answer = nums.map((num) => obj[num]);
console.log(answer.join(" "));
