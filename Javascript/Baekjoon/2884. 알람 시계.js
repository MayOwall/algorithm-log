const fs = require("fs");
const [h, m] = fs
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .split(" ")
  .map((v) => Number(v));

if (m >= 45) {
  console.log(`${h} ${m - 45}`);
} else {
  if (h === 0) {
    console.log(`23 ${60 - (45 - m)}`);
  } else {
    console.log(`${h - 1} ${60 - (45 - m)}`);
  }
}
