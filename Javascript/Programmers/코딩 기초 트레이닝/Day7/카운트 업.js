const solution = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => i + start);
