/**
 * 분할 정복
 * 0. 입력된 배열의 길이가 1일경우, 해당 배열을 리턴한다.
 * 1. 입력된 배열을 두 배열로 나눈다.
 * 2. 두 배열에 대해 분할 정복을 재귀한 배열을 구한다.
 * 3. 두 배열을 병합하여 리턴한다.
 *
 * // 병합
 * - 두 배열의 현재 탐색할 idx로 0을 초기화한다.
 * - 두 배열 모두 현재 탐색할 idx가 배열의 길이보다 작은 한
 * - 두 배열의 현재 탐색할 idx 값을 비교한 후, 더 작은 값을 결과 배열에 넣어준다.
 * - 조건이 완료된 후, 기존 두 배열의 남은 원소를 결과 배열에 넣어준다.
 * - 결과 배열을 리턴한다.
 */

class MergeSort {
  static desc = (arr) => this.#sort(arr, this.#mergeDesc);
  static asce = (arr) => this.#sort(arr, this.#mergeAsce);

  static #sort(arr, mergeUtil) {
    if (!arr.length || arr.length === 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const arr1 = arr.slice(0, mid);
    const arr2 = arr.slice(mid);

    const sortedArr1 = this.#sort(arr1, mergeUtil);
    const sortedArr2 = this.#sort(arr2, mergeUtil);

    return mergeUtil(sortedArr1, sortedArr2);
  }
  static #mergeDesc(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      const cur1 = arr1[i];
      const cur2 = arr2[j];

      if (cur1 === cur2) {
        result.push(cur1, cur2);
        i = j += 1;
      }
      if (cur1 > cur2) {
        result.push(cur1);
        i += 1;
      }
      if (cur1 < cur2) {
        result.push(cur2);
        j += 1;
      }
    }

    result.push(...arr1.slice(i));
    result.push(...arr2.slice(j));

    return result;
  }
  static #mergeAsce(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      const cur1 = arr1[i];
      const cur2 = arr2[j];

      if (cur1 === cur2) {
        result.push(cur1, cur2);
        i = j += 1;
      }
      if (cur1 < cur2) {
        result.push(cur1);
        i += 1;
      }
      if (cur1 > cur2) {
        result.push(cur2);
        j += 1;
      }
    }

    result.push(...arr1.slice(i));
    result.push(...arr2.slice(j));

    return result;
  }
}

// 임의의 20개의 배열 테스트
const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
console.log("desc", MergeSort.desc(arr));
console.log("asce", MergeSort.asce(arr));

// 빈 배열 테스트
console.log("empty", MergeSort.desc([]));
