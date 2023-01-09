function solution(arr1, arr2) {
  return arr1.map((a, idxA) => a.map((b, idxB) => b + arr2[idxA][idxB]));
}
