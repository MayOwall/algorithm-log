const fs = require("fs");
const input = fs.readFileSync("BaekjoonEx.txt").toString().trim() * 1;

let answer = 0;
let i = 1;
while (i <= input) {
  answer += i;
  i++;
}

console.log(answer);
