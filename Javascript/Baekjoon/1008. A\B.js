const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const answer = Number((input[0] / input[1]).toString().slice(0, 20));

console.log(answer);
