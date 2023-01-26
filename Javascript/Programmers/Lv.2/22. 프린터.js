class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
  }
  enqueue(newValue) {
    const node = new Node(newValue);
    if (this.head === null) {
      this.head = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  peek() {
    return this.head.value;
  }
}

const solution = (priorities, location) => {
  const queue = new Queue();
  priorities.forEach((v, idx) => {
    queue.enqueue([priorities[idx], idx]);
  });

  priorities = priorities.sort((a, b) => b - a);

  let count = 0;

  while (true) {
    const value = queue.peek();
    if (priorities[count] > value[0]) {
      queue.enqueue(queue.dequeue());
    } else {
      count += 1;
      if (value[1] === location) return count;
      queue.dequeue();
    }
  }
};
