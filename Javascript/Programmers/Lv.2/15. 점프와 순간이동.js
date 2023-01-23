const solution = (N) => {
  let answer = 1;

  while (N !== 1) {
    if (N % 2) {
      N = (N - 1) / 2;
      answer += 1;
    } else {
      N /= 2;
    }
  }

  return answer;
};
