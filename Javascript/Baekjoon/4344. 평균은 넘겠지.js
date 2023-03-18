const [num, ...cases] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < num; i++) {
  const [num, ...scores] = cases[i].split(" ");
  const aver = scores.reduce((acc, cur) => acc + Number(cur), 0) / num;
  const overNum = scores.filter((v) => v > aver).length;
  console.log(((overNum / num) * 100).toFixed(3) + "%");
}
