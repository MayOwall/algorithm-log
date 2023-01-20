const calculator = (a, b) => Math.abs(a[0] - b[0]) / Math.abs(a[1] - b[1]);

const solution = (dots) => {
  const [dot1, dot2, dot3, dot4] = dots;
  if (calculator(dot1, dot2) === calculator(dot3, dot4)) return 1;
  if (calculator(dot1, dot3) === calculator(dot2, dot4)) return 1;
  if (calculator(dot1, dot4) === calculator(dot2, dot3)) return 1;
  return 0;
};
