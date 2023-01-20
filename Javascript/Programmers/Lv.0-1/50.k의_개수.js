function solution(i, j, k) {
  let answer = 0;
  for (let v = i; v <= j; v++) {
    answer += String(v)
      .split("")
      .filter((a) => a === String(k)).length;
  }
  return answer;
}
