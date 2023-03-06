const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim() * 1;

let answer = "";

while (input >= 4) {
  answer += "long ";
  input -= 4;
}

console.log(answer + "int");
