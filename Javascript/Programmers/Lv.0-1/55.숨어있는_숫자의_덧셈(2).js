const solution = (my_string) =>
  my_string
    .split(/[^0-9]/)
    .filter((v) => !!v)
    .reduce((acc, cur) => acc + Number(cur), 0);
