const fs = require("fs");
const arr = fs.readFileSync("BaekjoonEx.txt").toString().split("\n");

for (let i = 1; i <= Number(arr[0]); i++) {
  const num = Number(arr[i][0]) + Number(arr[i][2]);
  console.log(num);
}
