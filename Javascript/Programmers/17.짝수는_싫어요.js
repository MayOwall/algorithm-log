const solution = (n) =>
  n % 2 === 0
    ? new Array(n / 2).fill(1).map((v, idx) => v + idx * 2)
    : new Array((n + 1) / 2).fill(1).map((v, idx) => v + idx * 2);
