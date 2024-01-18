let [_, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Queue {
  constructor() {
    this.queue = [];
    this.queueIdx = 0;
  }
  push = (X) => {
    this.queue.push(X);
  };
  pop = () => {
    if (this.empty()) return -1;
    const result = this.queue[this.queueIdx];
    this.queueIdx++;
    return result;
  };
  size = () => {
    if (this.empty()) return 0;
    return this.queue.length - this.queueIdx;
  };
  empty = () => {
    return this.queue.length - this.queueIdx <= 0 ? 1 : 0;
  };
  front = () => {
    return this.queue[this.queueIdx] || -1;
  };
  back = () => {
    return this.empty() === 1 ? -1 : this.queue[this.queue.length - 1];
  };
}
const queue = new Queue();
const answer = [];

inputs.forEach((input) => {
  const [order, X] = input.split(" ");
  switch (order) {
    case "push":
      queue.push(X);
      break;
    default:
      const result = queue[order]();
      answer.push(result);
  }
});

console.log(answer.join("\n"));
