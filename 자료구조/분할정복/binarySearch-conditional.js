/** target의 인덱스를 리턴하는 함수 */
function binarySearch(arr, target) {
  if (!arr.length) return -1;

  let left = 0;
  let right = arr.length;

  while (left <= right) {
    const midIdx = Math.floor((left + right) / 2);
    const mid = arr[midIdx];

    // mid가 목표한 값이면 해당 값을 리턴한다.
    if (mid === target) {
      return midIdx;
    }

    // mid가 목표한 값 보다 크다면
    // right를 midIdx - 1 값으로 변경한다.
    // 반복한다.
    if (mid > target) {
      right = midIdx - 1;
      continue;
    }

    // mid가 목표한 값 보다 작다면
    // left를 midIdx + 1 값으로 변경한다.
    // 반복한다.
    if (mid < target) {
      left = midIdx + 1;
    }
  }

  // 반복문을 통해 찾지 못한다면 값이 존재하지 않는다는 뜻이므로
  // -1을 리턴한다.
  return -1;
}

// 랜덤한 target과 배열을 생성하여 테스트 실행
const target = Math.floor(Math.random() * 100);
const arr = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 100)
).sort((a, b) => a - b);

console.log(`Idx of ${target} : ${binarySearch(arr, target)}`);
