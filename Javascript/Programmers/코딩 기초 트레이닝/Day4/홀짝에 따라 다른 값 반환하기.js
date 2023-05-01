const solution = (n) => {
  if (n % 2) {
    return Array.from({ length: (n + 1) / 2 }, (_, i) => i * 2 + 1).reduce(
      (acc, cur) => acc + cur
    );
  }
  if (!(n % 2)) {
    return Array.from({ length: n / 2 }, (_, i) =>
      Math.pow((i + 1) * 2, 2)
    ).reduce((acc, cur) => acc + cur);
  }
};
