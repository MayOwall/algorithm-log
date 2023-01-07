const solution = (n) =>
  new Array(n)
    .fill(null)
    .reduce((acc, _, idx) => (idx % 2 ? acc + "박" : acc + "수"), "");
