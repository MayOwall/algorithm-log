const solution = (n) =>
  String(n)
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
