const [_, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const stack = [];

inputs.forEach((input) => {
  input !== "0" ? stack.push(input) : stack.pop();
});

console.log(stack.reduce((acc, cur) => acc + Number(cur), 0));
