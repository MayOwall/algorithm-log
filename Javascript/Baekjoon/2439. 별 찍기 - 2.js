const input = require("fs").readFileSync("/dev/stdin").toString().trim() * 1;

let answer = "";

for (let i = 1; i <= input; i++) {
  const temp = Array.from({ length: i }, () => "*").join("");
  answer += `${temp}\n`;
}

console.log(answer);
