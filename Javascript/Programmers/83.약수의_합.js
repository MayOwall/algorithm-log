const solution = (n) =>
  new Array(n)
    .fill(null)
    .reduce((acc, _, idx) => (!(n % (idx + 1)) ? acc + idx + 1 : acc), 0);
