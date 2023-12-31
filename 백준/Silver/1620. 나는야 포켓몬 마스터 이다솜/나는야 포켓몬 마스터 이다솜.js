const [nums, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = nums.split(" ");
const dic = inputs.slice(0, N * 1);
const targets = inputs.slice(N * 1);

const obj = {};
dic.forEach((v, i) => (obj[v] = i));

for (let i = 0; i < targets.length; i++) {
  const target = targets[i];

  if (target == target * 1) {
    console.log(dic[target * 1 - 1]);
  } else {
    console.log(obj[target] + 1);
  }
}
