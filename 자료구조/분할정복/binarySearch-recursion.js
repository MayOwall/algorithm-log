function binarySearch(arr, target) {
  // 배열의 길이가 1이라면
  // 배열 첫번째의 값을 확인하고 리턴한다
  if (arr.length === 1) {
    return arr[0] === target ? arr[0] : null;
  }

  // 배열의 중간에 위치한 값인 mid를 찾는다.
  const midIdx = Math.floor(arr.length / 2);
  const mid = arr[midIdx];

  // mid가 target과 동일한 값이면 mid를 리턴한다.
  if (mid === target) {
    return mid;
  }

  let nextArr;

  // mid가 condition보다 작다면
  // 다음 배열을 mid 이전의 값들로 구성한다.
  if (mid < target) {
    nextArr = arr.slice(midIdx + 1);
  }
  // mid가 condition보다 크다면
  // 다음 배열을 mid 이후의 값들로 구성한다.
  if (mid > target) {
    nextArr = arr.slice(0, midIdx);
  }

  // 다음 배열을 탐색한 값을 리턴한다.
  return binarySearch(nextArr, target);
}

const even = [1, 2, 3, 4, 5, 6];
const odd = [1, 2, 3, 4, 5];

console.log("result", binarySearch(even, 4));
console.log("result", binarySearch(even, 1));
console.log("result", binarySearch(even, 6));
console.log("result", binarySearch(odd, 2));
console.log("result", binarySearch(odd, 1));
console.log("result", binarySearch(odd, 5));
