const solution = (n) => {
  if (n === 1) return 0;
  let i = 0;
  while (i++ < 500) {
    n % 2 ? (n = n * 3 + 1) : (n = n / 2);
    if (n === 1) return i;
  }
  return -1;
};
