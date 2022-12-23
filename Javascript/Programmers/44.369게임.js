const solution = (order) =>
  order
    .toString()
    .split("")
    .reduce(
      (acc, cur) => (cur === "3" || cur === "6" || cur === "9" ? acc + 1 : acc),
      0
    );
