const solution = (numbers, direction) =>
  direction === "left"
    ? numbers.slice(1).concat(numbers[0])
    : [numbers[numbers.length - 1]].concat(numbers.slice(0, -1));
