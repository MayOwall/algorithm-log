function MinHeap() {
  // heap : 노드들을 담는 배열
  this.heap = [null];

  // getParentIdx(idx) : 부모 인덱스를 구하는 메서드
  this.getParentIdx = (idx) => {
    return Math.floor(idx / 2);
  };
  // getLeftChildIndex(idx) : 왼 자식 인덱스를 구하는 메서드
  this.getLeftChildIdx = (idx) => {
    return idx * 2;
  };

  // getRightChildIndex(i) : 오른 자식 인덱스를 구하는 메서드
  this.getRightChildIdx = (idx) => {
    return idx * 2 + 1;
  };
  // swap(idx1, idx2) : 두 노드를 교환하는 메서드
  this.swap = (idx1, idx2) => {
    const temp = this.heap[idx2];
    this.heap[idx2] = this.heap[idx1];
    this.heap[idx1] = temp;
  };

  // hepifyUp() : 위 방향으로 부모, 자식 노드를 비교하는 메서드
  this.heapifyUp = () => {
    let curIdx = this.heap.length - 1;
    while (
      curIdx !== 1 &&
      this.heap[this.getParentIdx(curIdx)] > this.heap[curIdx]
    ) {
      this.swap(curIdx, this.getParentIdx(curIdx));
      curIdx = this.getParentIdx(curIdx);
    }
  };

  // heapifyDown() : 아래 방향으로 부모, 자식 노드를 비교하는 메서드
  this.heapifyDown = () => {
    let curIdx = 1;

    while (this.heap[this.getLeftChildIdx(curIdx)] !== undefined) {
      let smallestIdx = this.getLeftChildIdx(curIdx);
      const rightIdx = this.getRightChildIdx(curIdx);

      if (
        this.heap[rightIdx] !== undefined &&
        this.heap[rightIdx] < this.heap[smallestIdx]
      ) {
        smallestIdx = rightIdx;
      }

      if (this.heap[smallestIdx] < this.heap[curIdx]) {
        this.swap(curIdx, smallestIdx);
        curIdx = smallestIdx;
        continue;
      }
      break;
    }
  };

  // add(value) : heap에 새로운 값을 더하는 메서드
  this.add = (value) => {
    this.heap.push(value);
    this.heapifyUp();
  };

  // poll() : heap에서 루트 값을 빼어 재정렬한 후, 루트 값을 리턴하는 메서드
  this.poll = () => {
    const root = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.heapifyDown();
    return root;
  };
}

function MaxHeap() {
  // heap : 노드들을 담는 배열
  this.heap = [null];

  // getParentIdx(idx) : 부모 인덱스를 구하는 메서드
  this.getParentIdx = (idx) => {
    return Math.floor(idx / 2);
  };

  // getLeftChildIndex(idx) : 왼 자식 인덱스를 구하는 메서드
  this.getLeftChildIdx = (idx) => {
    return idx * 2;
  };

  // getRightChildIndex(i) : 오른 자식 인덱스를 구하는 메서드
  this.getRightChildIdx = (idx) => {
    return idx * 2 + 1;
  };

  // swap(idx1, idx2) : 두 노드를 교환하는 메서드
  this.swap = (idx1, idx2) => {
    const temp = this.heap[idx2];
    this.heap[idx2] = this.heap[idx1];
    this.heap[idx1] = temp;
  };

  // hepifyUp() : 위 방향으로 부모, 자식 노드를 비교하는 메서드
  this.heapifyUp = () => {
    let curIdx = this.heap.length - 1;
    while (
      curIdx !== 1 &&
      this.heap[this.getParentIdx(curIdx)] < this.heap[curIdx]
    ) {
      this.swap(curIdx, this.getParentIdx(curIdx));
      curIdx = this.getParentIdx(curIdx);
    }
  };

  // heapifyDown() : 아래 방향으로 부모, 자식 노드를 비교하는 메서드
  this.heapifyDown = () => {
    let curIdx = 1;

    while (this.heap[this.getLeftChildIdx(curIdx)] !== undefined) {
      let biggestIdx = this.getLeftChildIdx(curIdx);
      const rightIdx = this.getRightChildIdx(curIdx);

      if (
        this.heap[rightIdx] !== undefined &&
        this.heap[rightIdx] > this.heap[biggestIdx]
      ) {
        biggestIdx = rightIdx;
      }

      if (this.heap[biggestIdx] > this.heap[curIdx]) {
        this.swap(curIdx, biggestIdx);
        curIdx = biggestIdx;
        continue;
      }
      break;
    }
  };

  // add(value) : heap에 새로운 값을 더하는 메서드
  this.add = (value) => {
    this.heap.push(value);
    this.heapifyUp();
  };

  // poll() : heap에서 루트 값을 빼어 재정렬한 후, 루트 값을 리턴하는 메서드
  this.poll = () => {
    const root = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.heapifyDown();
    return root;
  };
}
