const solution = (my_string) =>
  my_string
    .split("")
    .map((v) => Number(v))
    .filter((v) => !isNaN(v))
    .sort((a, b) => a - b);
