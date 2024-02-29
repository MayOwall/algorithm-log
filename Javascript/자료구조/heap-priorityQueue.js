class MinHeap {
  constructor() {
    this.heap = [null];
    this.FIRST_INDEX = 1;
  }

  isExist = () => this.heap.length > this.FIRST_INDEX;
  getMin = () => this.heap[this.FIRST_INDEX];
  getParentIndex = (n) => Math.floor(n / 2);
  getLeftChildIndex = (n) => n * 2;
  getRightChildIndex = (n) => n * 2 + 1;

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
    const lastInsertedNode = this.heap[index];

    while (index > this.FIRST_INDEX) {
      const parentIndex = this.getParentIndex(index);
      const parentNode = this.heap[parentIndex];

      if (parentNode > lastInsertedNode) {
        this.heap[index] = parentNode;
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  };
  heapifyDown = () => {
    let index = this.FIRST_INDEX;
    const root = this.heap[index];

    while (this.getLeftChildIndex(index) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const leftChild = this.heap[leftChildIndex];
      const rightChildIndex = this.getRightChildIndex(index);
      const rightChild = this.heap[rightChildIndex];
      const smallerChildIndex =
        rightChild && leftChild > rightChild ? rightChildIndex : leftChildIndex;
      const smallerChild = this.heap[smallerChildIndex];
      if (smallerChild < root) {
        this.heap[index] = smallerChild;
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = root;
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
