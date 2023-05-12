const solution = (rank, attendance) => {
  const [a, b, c, ..._] = rank
    .filter((_, i) => attendance[i])
    .sort((a, b) => b - a);
  return 10000 * a + 100 * b + c;
};
