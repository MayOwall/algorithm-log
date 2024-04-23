/**  target의 idx를 리턴하는 함수 */

function binarySearch(arr, left, right, target) {
  // left가 right보다 크다면 모든 탐색을 완료했다는 뜻이므로
  // 값이 없음(a.k.a -1)을 리턴한다.
  if (left > right) {
    return -1;
  }

  // 배열의 중간에 위치한 값인 mid를 찾는다.
  const midIdx = Math.floor((left + right) / 2);
  const mid = arr[midIdx];

  // mid가 target과 동일한 값이면 mid를 리턴한다.
  if (mid === target) {
    return midIdx;
  }

  let nextLeft = left;
  let nextRight = right;

  // mid가 condition보다 작다면
  // 다음 탐색 범위를 mid보다 크도록 줄인다.
  if (mid < target) {
    nextLeft = midIdx + 1;
  }
  // mid가 condition보다 크다면
  // 다음 탐색 범위를 mid보다 작도록 줄인다.
  if (mid > target) {
    nextRight = midIdx - 1;
  }

  // 다음 배열을 탐색한 값을 리턴한다.
  return binarySearch(arr, nextLeft, nextRight, target);
}

// 랜덤한 target과 배열을 생성하여 테스트 실행
const target = Math.floor(Math.random() * 100);
const arr = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 100)
).sort((a, b) => a - b);

console.log(
  `Idx of ${target} : ${binarySearch(arr, 0, arr.length - 1, target)}`
);
