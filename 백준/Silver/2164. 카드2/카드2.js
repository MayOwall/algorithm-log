let input = require("fs").readFileSync("/dev/stdin").toString().trim();

class Queue {
  _queue;
  _queueIdx;

  constructor(num) {
    this._queue = Array.from({ length: Number(num) }, (_, idx) => idx + 1);
    this._queueIdx = 0;
  }

  get contents() {
    return [...this._queue];
  }

  get length() {
    return this._queue.length - this._queueIdx;
  }

  pop = () => {
    const card = this._queue[this._queueIdx];
    this._queue[this._queueIdx] = null;
    this._queueIdx += 1;
    return card;
  };

  push = (card) => {
    this._queue.push(card);
  };
}

const queue = new Queue(input);

while (queue.length !== 1) {
  queue.pop();
  const card = queue.pop();
  queue.push(card);
}

console.log(queue.pop());
