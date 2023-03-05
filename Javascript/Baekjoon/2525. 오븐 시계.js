const fs = require("fs");
let [h, m, t] = fs
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .replace("\n", " ")
  .split(" ")
  .map((v) => Number(v));

if (m + t < 60) {
  console.log(`${h} ${m + t}`);
} else {
  h += Math.floor((m + t) / 60);
  m = (m + t) % 60;
  console.log(`${h % 24} ${m}`);
}
