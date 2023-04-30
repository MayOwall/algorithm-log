const solution = (a, b) => {
  const case1 = Number(a.toString() + b.toString());
  const case2 = 2 * a * b;
  return case1 > case2 ? case1 : case2;
};
