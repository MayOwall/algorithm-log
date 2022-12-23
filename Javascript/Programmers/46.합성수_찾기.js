const solution = (n) => {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        answer += 1;
        break;
      }
    }
  }

  return answer;
};
