const solution = (s) =>
  s
    .split(" ")
    .map((v) =>
      v
        .split("")
        .map((a, idx) => (idx === 0 ? a.toUpperCase() : a.toLowerCase()))
        .join("")
    )
    .join(" ");
