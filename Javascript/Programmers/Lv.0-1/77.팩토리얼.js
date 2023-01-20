const solution = (n) => {
  let i = 0;
  while (i++ <= 10) {
    const pac = new Array(i + 1)
      .fill(null)
      .reduce((acc, _, idx) => acc * (idx + 1), 1);
    if (pac > n) return i;
  }
};
