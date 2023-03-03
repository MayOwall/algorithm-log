const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const answer = input[0] - input[1];
console.log(answer);
