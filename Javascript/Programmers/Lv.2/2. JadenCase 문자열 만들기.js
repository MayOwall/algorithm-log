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

// 2023.03.03
const solution2 = (s) =>
  s
    .split(" ")
    .map((v) => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
    .join(" ");
