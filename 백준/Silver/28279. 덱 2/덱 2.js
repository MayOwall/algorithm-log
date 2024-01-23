class Node {
  prev = null;
  next = null;
  constructor(value) {
    this.value = value;
  }
}

class Deque {
  head = null;
  tail = null;
  size = 0;

  insert(type, value) {
    const curNode = new Node(value);
    if (!this.size) {
      this.head = this.tail = curNode;
    } else {
      if (type === "front") {
        this.head.prev = curNode;
        curNode.next = this.head;
        this.head = curNode;
      } else {
        this.tail.next = curNode;
        curNode.prev = this.tail;
        this.tail = curNode;
      }
    }
    this.size += 1;
  }

  extract(type) {
    if (type === "front") {
      if (!this.head) return -1;
      const curValue = this.head.value;
      this.head = this.head.next;
      this.head ? (this.head.prev = null) : (this.tail = null);
      this.size -= 1;
      return curValue;
    }
    if (!this.tail) return -1;
    const curValue = this.tail.value;
    this.tail = this.tail.prev;
    this.tail ? (this.tail.next = null) : (this.head = null);
    this.size -= 1;
    return curValue;
  }

  isEmpty() {
    return !!this.size ? 0 : 1;
  }

  get front() {
    if (!this.head) return -1;
    return this.head.value;
  }

  get back() {
    if (!this.tail) return -1;
    return this.tail.value;
  }
}

const dq = new Deque();
const answer = [];

const [_, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

inputs.forEach((input) => {
  const [order, X] = input.split(" ");

  switch (order) {
    case "1":
      dq.insert("front", X);
      break;
    case "2":
      dq.insert("back", X);
      break;
    case "3":
      answer.push(dq.extract("front"));
      break;
    case "4":
      answer.push(dq.extract("back"));
      break;
    case "5":
      answer.push(dq.size);
      break;
    case "6":
      answer.push(dq.isEmpty());
      break;
    case "7":
      answer.push(dq.front);
      break;
    default:
      answer.push(dq.back);
  }
});

console.log(answer.join("\n"));
