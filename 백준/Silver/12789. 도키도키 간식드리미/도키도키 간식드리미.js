let [_, waits] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

waits = waits.split(" ").reverse();

const stack = [];
const done = [null];

while (waits.length) {
  const targetNumber = done.length;
  const currentNumber = Number(waits.pop());

  if (currentNumber === targetNumber) {
    done.push(currentNumber);
    continue;
  }

  if (stack.length) {
    const stackNumber = Number(stack[stack.length - 1]);
    if (stackNumber === targetNumber) {
      done.push(stack.pop());
      waits.push(currentNumber);
      continue;
    }
  }
  stack.push(currentNumber);
}

while (stack.length) {
  const targetNumber = done.length;
  const stackNumber = Number(stack.pop());
  if (stackNumber === targetNumber) {
    done.push(stackNumber);
  } else {
    console.log("Sad");
    return;
  }
}

console.log("Nice");
