function solution(s) {
  let x = null;
  let xCount = 0;
  let etcCount = 0;
  let answer = 0;

  s.split("").forEach((v) => {
    if (x === null) {
      x = v;
      xCount += 1;
    } else if (x === v) {
      xCount += 1;
    } else {
      etcCount += 1;
      if (xCount === etcCount) {
        answer += 1;
        x = null;
        xCount = 0;
        etcCount = 0;
      }
    }
  });

  if (xCount !== etcCount) answer += 1;

  return answer;
}
