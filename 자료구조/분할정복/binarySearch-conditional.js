function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left <= right) {
    const midIdx = Math.floor((left + right) / 2);
    const mid = arr[midIdx];

    // mid가 목표한 값이면 해당 값을 리턴한다.
    if (mid === target) {
      return mid;
    }

    // mid가 목표한 값 보다 크다면
    // right를 mid - 1 값으로 변경한다.
    // 반복한다.
    if (mid > target) {
      right = mid - 1;
      continue;
    }

    // mid가 목표한 값 보다 작다면
    // left를 mid + 1 값으로 변경한다.
    // 반복한다.
    if (mid < target) {
      left = mid + 1;
    }
  }

  // 반복문을 통해 찾지 못한다면 값이 존재하지 않는다는 뜻이므로
  // null을 리턴한다.
  return null;
}

const odd = [1, 2, 3, 4, 5];
const even = [1, 2, 3, 4, 5, 6];

console.log("result", binarySearch(odd, 2));
console.log("result", binarySearch(odd, 1));
console.log("result", binarySearch(odd, 5));

console.log("result", binarySearch(even, 4));
console.log("result", binarySearch(even, 1));
console.log("result", binarySearch(even, 6));
