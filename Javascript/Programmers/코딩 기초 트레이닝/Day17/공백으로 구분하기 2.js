const solution = (my_string) =>
  my_string.trim().replaceAll(/ {1,}/g, " ").split(" ");
