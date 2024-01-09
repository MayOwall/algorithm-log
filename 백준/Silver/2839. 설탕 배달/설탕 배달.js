let weight = require("fs").readFileSync("/dev/stdin").toString().trim() * 1;

const answers = [];
for (let i = 0; i <= 5000 / 3; i++) {
  for (let j = 0; j <= 5000 / 5; j++) {
    const curWeight = i * 3 + j * 5;
    if (curWeight === weight) answers.push(i + j);
  }
}

if (!answers.length) return console.log(-1);
console.log(Math.min(...answers));
