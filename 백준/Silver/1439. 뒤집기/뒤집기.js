const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let count = 1;

for (let i = 1; i < input.length; i++) {
  if (input[i] !== input[i - 1]) count += 1;
}

console.log(Math.floor(count / 2));
