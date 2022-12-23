const solution = (n) =>
  new Array(n)
    .fill(null)
    .map((_, idx) => idx + 1)
    .filter((v) => !(n % v));
