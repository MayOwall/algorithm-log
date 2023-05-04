const solution = (l, r) => {
  const arr = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(
    (cur) =>
      !cur
        .toString()
        .split("")
        .filter((v) => v !== "0" && v !== "5").length
  );
  return arr.length ? arr : [-1];
};
