const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? (answer += 1) : null;
  }

  return answer;
};
