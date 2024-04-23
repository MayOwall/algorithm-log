// quickSort-common
// 일반적인 퀵소트 (지정된 배열 범위의 요소들 중, 첫번째 인덱스의 요소를 pivot으로 지정)

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (high - low < 1) return;

  let pivot = low;
  pivot = partitioning(arr, low, high, pivot);

  if (pivot - low >= 2) quickSort(arr, low, pivot - 1);
  if (high - pivot >= 2) quickSort(arr, pivot + 1, high);
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

/** 테스트
const arr = Array.from({ length: Math.floor(Math.random() * 10) }, () =>
  Math.floor(Math.random() * 100)
);
const testArr = [...arr].sort((a, b) => a - b);
console.log("🧪 QUICK-SORT");
console.log("| INPUT       :", `[${arr.join(",")}]`);
quickSort(arr);
console.log("| RETURN      :", `[${arr.join(",")}]`);
console.log(
  "| TEST_RESULT :",
  testArr.join(",") === arr.join(",") ? "✅ success" : "❌ fail"
);
 */
