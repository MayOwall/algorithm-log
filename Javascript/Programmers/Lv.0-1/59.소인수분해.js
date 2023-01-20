const solution = (n) => {
  const answer = [];
  let temp = n;

  while (temp !== 1) {
    for (let i = 2; i <= n; i++) {
      if (temp % i === 0) {
        temp = temp / i;
        answer.push(i);
        break;
      }
    }
  }

  return [...new Set(answer)].sort((a, b) => a - b);
};
