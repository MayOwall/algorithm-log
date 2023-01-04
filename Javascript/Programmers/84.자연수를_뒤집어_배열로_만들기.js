const solution = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((v) => Number(v));
