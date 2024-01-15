const stack = [];
const answer = [];
const inputInfo = [
  "",
  (X) => {
    stack.push(X);
  },
  () => (stack.length ? stack.pop() : -1),
  () => stack.length,
  () => (stack.length ? 0 : 1),
  () => (stack.length ? stack[stack.length - 1] : -1),
];

let [_, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

inputs.forEach((v) => {
  if (v[0] === "1") {
    const [_, X] = v.split(" ");
    inputInfo[1](X);
  } else {
    answer.push(inputInfo[Number(v)]());
  }
});

console.log(answer.join("\n"));
