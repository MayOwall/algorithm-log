const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});

const solution = ([x, y]) => {
  x > 0
    ? y > 0
      ? console.log(1)
      : console.log(4)
    : y > 0
    ? console.log(2)
    : console.log(3);
};
