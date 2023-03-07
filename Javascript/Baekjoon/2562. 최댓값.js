const arr = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const max = Math.max(...arr);
const answer = arr.indexOf(max.toString()) + 1;

console.log(max);
console.log(answer);
