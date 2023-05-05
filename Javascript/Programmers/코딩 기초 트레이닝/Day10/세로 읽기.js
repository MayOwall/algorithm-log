const solution = (my_string, m, c) =>
  my_string
    .split("")
    .reduce((acc, cur, i) => (i % m === c - 1 ? acc + cur : acc), "");
