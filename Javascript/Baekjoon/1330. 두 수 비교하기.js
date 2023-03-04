const fs = require("fs");
const [A, B] = fs.readFileSync("/dev/stdin").toString().split(" ");

if (Number(A) > Number(B)) {
  console.log(">");
} else if (Number(A) < Number(B)) {
  console.log("<");
} else {
  console.log("==");
}
