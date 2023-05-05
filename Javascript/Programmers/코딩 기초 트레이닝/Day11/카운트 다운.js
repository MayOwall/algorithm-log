const solution = (start, end) =>
  Array.from({ length: start - end + 1 }, (_, i) => start - i);
