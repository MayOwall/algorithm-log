// quickSort-medianOfThree
// 탐색 범위 중 3 요소에 대한 표본 조사를 통해 선정한 pivot을 기준으로 partitioning을 하는 quickSort

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (high - low < 1) return;

  let pivot = getMedian(arr, low, high);
  swap(arr, low, pivot);
  pivot = partitioning(arr, low, high);

  quickSort(arr, low, pivot - 1);
  quickSort(arr, pivot + 1, high);
}

function getMedian(arr, low, high) {
  const mid = Math.floor((low + high) / 2);
  if (
    (arr[mid] <= arr[low] && arr[low] <= arr[high]) ||
    (arr[mid] >= arr[low] && arr[low] >= arr[high])
  )
    return low;
  if (
    (arr[low] <= arr[mid] && arr[mid] <= arr[high]) ||
    (arr[low] >= arr[mid] && arr[mid] >= arr[high])
  )
    return mid;
  return high;
}

function partitioning(arr, low, high) {
  let pivot = low;
  let i = low + 1;
  let j = high;

  while (i <= j) {
    // 바꿔야 할 i 찾기
    while (arr[i] <= arr[pivot]) {
      i++;
      if (i > j) break;
    }
    // 바꿔야 할 j 찾기
    while (arr[j] >= arr[pivot]) {
      j--;
      if (i > j) break;
    }
    // i가 j보다 작거나 같으면 swap하기
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  // 마지막 i 요소와 pivot swap하기
  swap(arr, i - 1, pivot);
  return i - 1;
}

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

/**
 * 테스트
const arr = Array.from({ length: Math.floor(Math.random() * 10) }, () =>
  Math.floor(Math.random() * 100)
);
console.log("🧪 QUICK-SORT");
console.log("| INPUT       :", `[${arr.join(",")}]`);
quickSort(arr, 0, arr.length - 1);
console.log("| RETURN      :", `[${arr.join(",")}]`);
console.log(
  "| TEST_RESULT :",
  arr.sort((a, b) => a - b).join(",") === arr.join(",")
    ? "✅ success"
    : "❌ fail"
);
 */
