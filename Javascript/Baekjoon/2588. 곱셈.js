const fs = require("fs");
const [A, B] = fs.readFileSync("/dev/stdin").toString().split("\n");

console.log(A * B[2]);
console.log(A * B[1]);
console.log(A * B[0]);
console.log(A * B);
