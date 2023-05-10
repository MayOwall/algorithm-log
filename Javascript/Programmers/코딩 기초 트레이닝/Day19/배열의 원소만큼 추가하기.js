const solution = (arr) =>
  arr.map((v) => Array.from({ length: v }, () => v)).flat();
