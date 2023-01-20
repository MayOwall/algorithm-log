const solution = (k, m, score) =>
  score
    .sort((a, b) => b - a)
    .reduce(
      (acc, cur, idx) => (idx === 0 || (idx + 1) % m ? acc : acc + cur * m),
      0
    );
