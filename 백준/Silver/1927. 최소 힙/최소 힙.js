class PriorityQueue {
  constructor() {
    this.heap = [null];
    this.FIRST_INDEX = 1;
  }

  getParentIndex = (n) => Math.floor(n / 2);
  getLeftChildIndex = (n) => n * 2;
  getRightChildIndex = (n) => n * 2 + 1;

  enqueue = (value) => {
    this.heap.push(value);
    this.heapifyUp();
  };

  heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastNode = this.heap[index];

    while (index > this.FIRST_INDEX) {
      const parentIndex = this.getParentIndex(index);
      const parent = this.heap[parentIndex];
      if (parent > lastNode) {
        this.heap[index] = parent;
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastNode;
  };

  dequeue = () => {
    const root = this.heap[this.FIRST_INDEX];
    if (!root) return null;
    if (this.heap.length - 1 === this.FIRST_INDEX) return this.heap.pop();

    this.heap[this.FIRST_INDEX] = this.heap.pop();
    this.heapifyDown();
    return root;
  };

  heapifyDown = () => {
    let index = this.FIRST_INDEX;
    const root = this.heap[index];

    while (this.heap[this.getLeftChildIndex(index)]) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const leftChild = this.heap[leftChildIndex];
      const rightChildIndex = this.getRightChildIndex(index);
      const rightChild = this.heap[rightChildIndex];
      const smallerChildIndex =
        rightChild && rightChild < leftChild ? rightChildIndex : leftChildIndex;
      const smallerChild = this.heap[smallerChildIndex];

      if (smallerChild < root) {
        this.heap[index] = smallerChild;
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = root;
  };
}

const answer = [];
const [_, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const queue = new PriorityQueue();
inputs.forEach((input) => {
  input * 1 ? queue.enqueue(input * 1) : answer.push(queue.dequeue() || 0);
});

console.log(answer.join('\n'))
