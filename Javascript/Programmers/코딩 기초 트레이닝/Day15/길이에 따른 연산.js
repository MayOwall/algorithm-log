const solution = (num_list) =>
  num_list.length <= 10
    ? num_list.reduce((acc, cur) => acc * cur, 1)
    : num_list.reduce((acc, cur) => acc + cur);
