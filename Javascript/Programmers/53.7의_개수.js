const solution = (array) =>
  array.reduce(
    (acc, cur) =>
      acc +
      cur
        .toString()
        .split("")
        .reduce((acc, cur) => (cur === "7" ? acc + 1 : acc), 0),
    0
  );
