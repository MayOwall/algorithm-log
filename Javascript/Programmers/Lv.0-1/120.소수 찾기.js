const solution = (n) => {
  let answer = 0;
  outer: for (let i = 2; i <= n; i++) {
    for (let j = 2; j * j <= i; j++) {
      if (!(i % j)) continue outer;
    }
    answer += 1;
  }
  return answer;
};
