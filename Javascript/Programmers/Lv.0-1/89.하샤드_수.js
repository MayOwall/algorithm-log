const solution = (arr) =>
  arr %
  arr
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0)
    ? false
    : true;
