// quickSort-common
// 일반적인 퀵소트 (지정된 배열 범위의 요소들 중, 첫번째 인덱스의 요소를 pivot으로 지정)

function quickSort(arr, low = 0, high = arr.length - 1) {
  // 만약 배열의 길이가 1 이하라면 정렬할 필요가 없으므로 종료한다.
  if (high - low < 1) return;

  // 탐색 범위의 첫번째 요소를 pivot으로 지정한다.
  let pivot = low;

  // pivot을 기준으로 작은수 큰 수를 정렬한 후, pivot을 재할당해준다.
  pivot = partitioning(arr, low, high, pivot);

  // pivot보다 작은 범위 및 큰 범위에 대해 quickSort를 재귀한다.
  quickSort(arr, low, pivot - 1);
  quickSort(arr, pivot + 1, high);
}

function partitioning(arr, low, high, pivot) {
  // left와 right을 각각 low + 1와 high로 지정
  let left = low + 1;
  let right = high;

  outer: while (left <= right) {
    // - left의 요소가 pivot보다 같거나 작으면 left + 1
    while (arr[left] <= arr[pivot]) {
      left += 1;
      // - left가 right보다 크면 outer 탐색 종료
      if (left > right) break outer;
    }

    // - right의 요소가 pivot보다 같거나 크면 right - 1
    while (arr[right] >= arr[pivot]) {
      right -= 1;
      // - left가 right보다 작으면 outer 탐색 종료
      if (left > right) break outer;
    }

    // 왼쪽에 위치한 큰 수와 오른쪽에 위치한 작은 수를 교체
    swap(left, right);
    left += 1;
    right -= 1;
  }

  // 작은 수 중 가장 마지막의 요소와 pivot을 교체
  const nextPivot = left - 1;
  swap(nextPivot, pivot);
  return nextPivot;

  // a 인덱스 요소와 b 인덱스 요소를 바꿔주는 함수
  function swap(a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
}

/** 테스트

const arr = Array.from({ length: Math.floor(Math.random() * 7) }, () =>
  Math.floor(Math.random() * 100)
);
console.log("before :", arr);
quickSort(arr, 0, arr.length - 1);
console.log("result", arr);

 */
