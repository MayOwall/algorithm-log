function MinHeap() {
  this.heap = [];

  this.minValue = heap[0] || null;

  this.size = () => {
    return this.heap.length;
  };

  this.swap = (idx1, idx2) => {
    const temp = this.heap[idx2];
    this.heap[idx2] = this.heap[idx1];
    this.heap[idx1] = temp;
  };

  this.add = (value) => {
    this.heap.push(value);
    this.bubbleUp();
  };

  this.poll = () => {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  };

  this.bubbleUp = () => {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    while (
      this.heap[parentIdx] &&
      this.heap[index][1] < this.heap[parentIdx][1]
    ) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  };

  this.bubbleDown = () => {
    let idx = 0;
    let leftIdx = idx * 2 + 1;
    let rightIdx = idx * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx][1] < this.heap[idx][1]) ||
      (this.heap[rightIdx] && this.heap[rightIdx][1] < this.heap[idx][1])
    ) {
      let smallerIdx = leftIdx;
      if (
        this.heap[rightIdx] &&
        this.heap[rightIdx][1] < this.heap[smallerIdx][1]
      ) {
        smallerIdx = rightIdx;
      }

      this.swap(idx, smallerIdx);
      idx = smallerIdx;
      leftIdx = idx * 2 + 1;
      rightIdx = idx * 2 + 2;
    }
  };
}

function MaxHeap() {
  this.heap = [];

  this.maxValue = heap[0] || null;

  this.size = () => {
    return this.heap.length;
  };

  this.swap = (idx1, idx2) => {
    const temp = this.heap[idx2];
    this.heap[idx2] = this.heap[idx1];
    this.heap[idx1] = temp;
  };

  this.add = (value) => {
    this.heap.push(value);
    this.bubbleUp();
  };

  this.poll = () => {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  };

  this.bubbleUp = () => {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    while (
      this.heap[parentIdx] &&
      this.heap[index][1] > this.heap[parentIdx][1]
    ) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  };

  this.bubbleDown = () => {
    let idx = 0;
    let leftIdx = idx * 2 + 1;
    let rightIdx = idx * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx][1] > this.heap[idx][1]) ||
      (this.heap[rightIdx] && this.heap[rightIdx][1] > this.heap[idx][1])
    ) {
      let smallerIdx = leftIdx;
      if (
        this.heap[rightIdx] &&
        this.heap[rightIdx][1] > this.heap[smallerIdx][1]
      ) {
        smallerIdx = rightIdx;
      }

      this.swap(idx, smallerIdx);
      idx = smallerIdx;
      leftIdx = idx * 2 + 1;
      rightIdx = idx * 2 + 2;
    }
  };
}
