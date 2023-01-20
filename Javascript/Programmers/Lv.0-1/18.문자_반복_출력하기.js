const solution = (my_string, n) =>
  my_string
    .split("")
    .map((v) => new Array(n).fill(v))
    .flat()
    .join("");
