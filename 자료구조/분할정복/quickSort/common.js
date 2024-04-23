// quickSort-common
// 일반적인 퀵소트 (지정된 배열 범위의 요소들 중, 첫번째 인덱스의 요소를 pivot으로 지정)

/** 
- [x] 레이블 문법 없애기 
- [x] nextPivot 변수명을 더 적합한 것으로 변경
*/

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (high - low < 1) return;

  let pivot = low;
  pivot = partitioning(arr, low, high, pivot);

  quickSort(arr, low, pivot - 1);
  quickSort(arr, pivot + 1, high);
}

function partitioning(arr, low, high, pivot) {
  let left = low + 1;
  let right = high;

  while (left <= right) {
    while (arr[left] <= arr[pivot]) {
      left += 1;
      if (left > right) break;
    }

    while (arr[right] >= arr[pivot]) {
      right -= 1;
      if (left > right) break;
    }

    if (left <= right) {
      swap(left, right);
      left += 1;
      right -= 1;
    }
  }

  const lastMin = left - 1;
  swap(lastMin, pivot);
  return lastMin;

  function swap(a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
}

const arr = Array.from({ length: Math.floor(Math.random() * 7) }, () =>
  Math.floor(Math.random() * 100)
);
console.log("before :", arr);
quickSort(arr, 0, arr.length - 1);
console.log("result", arr);
