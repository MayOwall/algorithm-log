// three way partitioning
// pivot 보다 작은 수 | pivot과 같은 수 | pivot보다 큰 수로 partitioning을 한 후, 작은수 큰 수에 대해 quickSort를 재귀하는 방법.
// 장점 : pivot과 동일한 값이 많을 때 partitioning이 한쪽으로 치우치는 현상을 방지하여, quickSort의 성능 저하를 방지할 수 있다.

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (high - low < 1) return;

  const [left, right] = partitioning(arr, low, high);

  if (left - low >= 2) quickSort(arr, low, left - 1);
  if (high - right >= 2) quickSort(arr, right + 1, high);
}

function partitioning(arr, low, high) {
  let pivot = low;
  const pivotValue = arr[pivot];

  let lt = low;
  let gt = high;
  let i = low + 1;

  while (i <= gt) {
    if (arr[i] < pivotValue) {
      swap(arr, lt, i);
      i++;
      lt++;
    } else if (arr[i] > pivotValue) {
      swap(arr, i, gt);
      gt--;
    } else {
      i++;
    }
  }

  return [lt, gt];
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
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
