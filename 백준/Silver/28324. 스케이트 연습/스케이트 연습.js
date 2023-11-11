const fs = require("fs");
const [_, a] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const points = a
  .split(" ")
  .reverse()
  .map((v) => v * 1);

let count = 0;

for (let i = 0; i < points.length; i++) {
  const cur = points[i];
  const last = i === 0 ? 0 : points[i - 1];

  const next = cur > last + 1 ? last + 1 : cur;
  points[i] = next;
  count += next;
}

console.log(count);