const solution = (my_string) =>
  my_string
    .split("")
    .map((v) => (v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()))
    .join("");
