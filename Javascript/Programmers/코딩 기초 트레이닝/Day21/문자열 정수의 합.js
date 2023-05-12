const solution = (num_str) =>
  num_str.split("").reduce((acc, cur) => acc + cur * 1, 0);
