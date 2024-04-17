/** 분할 정복 (조건문 ver) */
class MergeSort {
  static desc = (arr) => this.#binaryTreeSort(arr, "desc");
  static asce = (arr) => this.#binaryTreeSort(arr, "asce");

  static #binaryTreeSort = (arr, type) => {
    // arr의 길이가 1이하 일 때의 예외 조건 필요
    if (arr.length < 2) {
      return arr;
    }

    // 쪼갤 배열과, 그 배열의 idx를 담은 스택 : toSplit
    // 이진 tree : binaryTree
    // toSplit에 [인덱스, arr] 구조의 요소 삽입
    const toSplit = [[1, arr]];
    const binaryTree = [null, arr];

    // 이진트리 만들기 반복문 시작!
    // while (toSplit의 길이가 남아있는 한.)
    while (toSplit.length) {
      // toSplit에서 pop하여 현재 요소의 tree 인덱스와 배열 확인
      const [treeIdx, curArr] = toSplit.pop();

      // 왼쪽 자식의 idx와 오른쪽 자식의 idx 구하기
      const leftChildIdx = treeIdx * 2;
      const rightChildIdx = leftChildIdx + 1;

      // 배열의 길이가 1이라면, 왼쪽 자식 및 오른쪽 자식 idx에 null을 삽입 & 조건문 continue
      if (curArr.length === 1) {
        binaryTree[leftChildIdx] = null;
        binaryTree[rightChildIdx] = null;
        continue;
      }

      // 배열의 길이가 2 이상이라면,
      // - 배열을 둘로 쪼개기
      const mid = Math.floor(curArr.length / 2);
      const leftChild = curArr.slice(0, mid);
      const rightChild = curArr.slice(mid);

      // - 왼쪽 배열은 왼쪽 자식에, 오른쪽 배열은 오른쪽 자식에 삽입
      binaryTree[leftChildIdx] = leftChild;
      binaryTree[rightChildIdx] = rightChild;

      // - 왼쪽 배열의 길이가 2 이상이라면, toSplit에 [왼쪽 자식 idx, 왼쪽 배열] 요소 삽입
      toSplit.push([leftChildIdx, leftChild]);
      // - 오른쪽 배열의 길이가 2 이상이라면, toSplit에 [오른쪽 자식 idx, 오른쪽 배열] 요소 삽입
      toSplit.push([rightChildIdx, rightChild]);
      // 반복 => 이진 트리 완성!
    }

    // 이진 트리 머지하기 반복문 시작!
    // while (이진 트리의 길이가 2가 아닐 때 까지)
    while (binaryTree.length !== 2) {
      // 부모 인덱스 = (트리의 길이 - 1) / 2
      // 오른쪽 자식 = 이진 트리.pop
      // 왼쪽 자식 = 이진 트리.pop
      const parentIdx = (binaryTree.length - 2) / 2;
      const rightChild = binaryTree.pop();
      const leftChild = binaryTree.pop();

      // 오른쪽 자식과 왼쪽 자식 모두 null이라면 continue
      if (!rightChild && !leftChild) {
        continue;
      }

      // 왼쪽 자식과 오른쪽 자식을 merge한 배열 mergeArr 구하기
      const mergeArr = this.#merge(leftChild, rightChild, type);

      // mergeArr을 부모 인덱스에 삽입.
      binaryTree[parentIdx] = mergeArr;

      // 반복 => 이진트리 머지 성공!
    }

    // 이진트리의 1번째 인덱스 배열을 리턴
    return binaryTree[1];
  };
  static #twoStackSort = (arr, type) => {
    if (arr.length < 2) {
      return arr;
    }

    let stack = [...arr.map((v) => [v])];
    let nextStack = [];

    while (stack.length !== 1) {
      while (stack.length >= 2) {
        const left = stack.pop();
        const right = stack.pop();
        const mergeArr = this.#merge(left, right, type);
        nextStack.push(mergeArr);
      }

      nextStack.push(...stack);
      stack = nextStack;
      nextStack = [];
    }

    return stack[0];
  };
  static #merge = (arr1, arr2, type) => {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      const cur1 = arr1[i];
      const cur2 = arr2[j];
      if (cur1 === cur2) {
        result.push(cur1, cur2);
        i += 1;
        j += 1;
        continue;
      }
      if (
        (type === "asce" && cur1 > cur2) ||
        (type === "desc" && cur1 < cur2)
      ) {
        result.push(cur2);
        j += 1;
        continue;
      }

      result.push(cur1);
      i += 1;
    }

    return [...result, ...arr1.slice(i), ...arr2.slice(j)];
  };
}

const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log("origin", arr);
console.log("desc", MergeSort.desc(arr));
console.log("asce", MergeSort.asce(arr));

// console.log("empty", MergeSort.desc([]));
