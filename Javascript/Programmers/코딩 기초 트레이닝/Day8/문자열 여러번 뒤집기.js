const solution = (my_string, queries) =>
  queries
    .reduce(
      (acc, [s, e]) => [
        ...acc.slice(0, s),
        ...acc.slice(s, e + 1).reverse(),
        ...acc.slice(e + 1),
      ],
      my_string.split("")
    )
    .join("");
