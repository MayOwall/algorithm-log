const solution = (s) =>
  s
    .split(" ")
    .map((a) =>
      a
        .split("")
        .map((v, idx) => (idx % 2 ? v.toLowerCase() : v.toUpperCase()))
        .join("")
    )
    .join(" ");
