const solution = (a, d, included) =>
  included.reduce((acc, cur, i) => (cur ? acc + a + d * i : acc), 0);
