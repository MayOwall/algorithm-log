const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  const [a, b] = input[i].trim().split(" ");
  const num = Number(a) + Number(b);
  console.log(`Case #${i}: ${num}`);
}
