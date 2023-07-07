let [_, ...arr] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

arr = arr.sort((a, b) => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  if (a[2] > b[2]) return 1;
  return -1;
});

arr.forEach((v) => console.log(v));
