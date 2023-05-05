const solution = (q, r, code) =>
  code.split("").reduce((acc, cur, i) => (i % q === r ? acc + cur : acc), "");
