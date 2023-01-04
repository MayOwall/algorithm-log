const solution = (n) =>
  !(Math.sqrt(n) % 1) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
