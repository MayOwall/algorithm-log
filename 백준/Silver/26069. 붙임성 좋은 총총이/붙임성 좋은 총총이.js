const [_, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let dancer = { ChongChong: true };
inputs.forEach((input) => {
  const [a, b] = input.split(" ");
  if (dancer[a] || dancer[b]) {
    dancer[a] = dancer[b] = true;
  }
});

console.log(Object.keys(dancer).length);
