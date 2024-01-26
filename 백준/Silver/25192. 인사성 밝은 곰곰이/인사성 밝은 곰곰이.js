const [_, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let log = {};
let count = 0;
inputs.forEach((input) => {
  if (input === "ENTER") {
    log = {};
    return;
  }
  if (log[input]) return;
  log[input] = true;
  count += 1;
});

console.log(count);
