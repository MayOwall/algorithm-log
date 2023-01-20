const solution = (a, b) =>
  new Array(Math.abs(a - b) + 1)
    .fill(null)
    .reduce((acc, _, idx) => acc + Math.min(a, b) + idx, 0);
