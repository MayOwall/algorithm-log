const solution = (my_string, is_suffix) =>
  Array.from({ length: my_string.length }, (_, i) =>
    my_string.slice(0, i + 1)
  ).includes(is_suffix)
    ? 1
    : 0;
