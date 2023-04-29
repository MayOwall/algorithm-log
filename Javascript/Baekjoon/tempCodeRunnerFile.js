const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const answer = input.reduce((acc, cur) => acc + Number(cur), 0);

console.log(answer);