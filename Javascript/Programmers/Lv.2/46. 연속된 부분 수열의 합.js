const solution = (sequence, k) => {
  let head = 0;
  let sum = 0;
  let answer = [];

  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];

    while (sum >= k) {
      if (sum === k) answer.push([head, i, i - head]);
      sum -= sequence[head];
      head += 1;
    }
  }

  return answer.sort((a, b) => a[2] - b[2])[0].slice(0, 2);
};
