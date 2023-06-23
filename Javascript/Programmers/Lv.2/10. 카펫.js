const solution = (brown, yellow) => {
  for (let c = 3; c <= brown - 3; c++) {
    const r = brown / 2 - c + 2;
    if ((c - 2) * (r - 2) === yellow) return [r, c];
  }
};
