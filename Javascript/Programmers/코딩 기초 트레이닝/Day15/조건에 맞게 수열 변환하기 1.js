const solution = (arr) =>
  arr.map(
    (v) => (v >= 50 && !(v % 2) ? v / 2 : v < 50 && v % 2 ? v * 2 : v),
    0
  );
