const solution = (arr, divisor) =>
  arr.filter((v) => !(v % divisor)).length
    ? arr.filter((v) => !(v % divisor)).sort((a, b) => a - b)
    : [-1];
