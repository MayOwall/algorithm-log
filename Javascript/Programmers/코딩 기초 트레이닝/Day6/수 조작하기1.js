const solution = (n, control) =>
  control
    .split("")
    .reduce(
      (acc, cur) =>
        cur === "w"
          ? acc + 1
          : cur === "s"
          ? acc - 1
          : cur === "d"
          ? acc + 10
          : acc - 10,
      n
    );
