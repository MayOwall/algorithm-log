const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < inputs.length; i++) {
  const temp = inputs[i].split("").filter((v) => v !== " ");
  console.log(Number(temp[0]) + Number(temp[1]));
}
