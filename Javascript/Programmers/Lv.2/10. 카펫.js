const solution = (brown, yellow) => {
  for (let h = 3; h <= brown / 2; h++) {
    const w = brown / 2 - h + 2;
    if (h * w === brown + yellow) return [w, h];
  }
};
