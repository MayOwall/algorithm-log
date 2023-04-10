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

// 2.
const solution2 = (priorities, location) => {
  let arr = priorities.map((v, i) => [v, i === location]);
  let answer = 0;

  outer: while (true) {
    const cur = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][0] > cur[0]) {
        arr = arr.slice(1);
        arr.push(cur);
        continue outer;
      }
    }
    if (cur[1]) return answer + 1;
    arr = arr.slice(1);
    answer += 1;
  }
};
