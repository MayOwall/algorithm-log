const solution = (my_string) =>
  my_string
    .split("")
    .map((v) => Number(v))
    .filter((v) => !!v)
    .reduce((acc, cur) => acc + cur, 0);
