class MinHeap {
  constructor() {
    this.heap = [null];
    this.FIRST_INDEX = 1;
  }

  isExist = () => this.heap.length > this.FIRST_INDEX;
  getParentIndex = (n) => Math.floor(n / 2);
  getLeftChildIndex = (n) => n * 2;
  getRightchildIndex = (n) => n * 2 + 1;

  insert = (value) => {
    this.heap.push(value);
    this.heapifyUp();
  };

  remove = () => {
    if (!this.isExist()) return null;
    if (this.heap.length - 1 === this.FIRST_INDEX) {
      return this.heap.pop();
    }

    const root = this.heap[this.FIRST_INDEX];

    this.heap[this.FIRST_INDEX] = this.heap.pop();
    this.heapifyDown();

    return root;
  };

  heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInsertNode = this.heap[index];

    while (index > this.FIRST_INDEX) {
      const parentIndex = this.getParentIndex(index);
      const parentNode = this.heap[parentIndex];
      const curNode = this.heap[index];
      if (parentNode > curNode) {
        this.heap[index] = parentNode;
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastInsertNode;
  };

  heapifyDown = () => {
    let index = this.FIRST_INDEX;
    const rootNode = this.heap[index];

    while (index < this.heap.length - 1) {
      const curNode = this.heap[index];
      const leftChildIndex = this.getLeftChildIndex(index);
      const leftChild = this.heap[leftChildIndex];
      const rightChildIndex = this.getRightchildIndex(index);
      const rightChild = this.heap[rightChildIndex];

      const smallerChildIndex =
        rightChild && leftChild > rightChild ? rightChildIndex : leftChildIndex;
      const smallerChild = this.heap[smallerChildIndex];

      if (smallerChild < curNode) {
        this.heap[index] = smallerChild;
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  };
}

class PriorityQueue extends MinHeap {
  constructor() {
    super();
  }

  getQueue = () => this.heap;
  enqueue = (value) => this.insert(value);
  dequeue = () => this.remove();
}
