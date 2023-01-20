const solution = (my_string, letter) =>
  my_string
    .split("")
    .filter((v) => v !== letter)
    .join("");
