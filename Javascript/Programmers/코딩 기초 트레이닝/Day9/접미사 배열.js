const solution = (my_string) =>
  Array.from({ length: my_string.length }, (_, i) => my_string.slice(i)).sort();
