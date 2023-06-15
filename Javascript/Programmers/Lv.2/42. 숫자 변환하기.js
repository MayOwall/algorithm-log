const solution = (x, y, n) => {
  if (x === y) return 0;
  const arr = Array.from({ length: y + 1 }, () => null);
  arr[x] = 1;

  for (let i = x; i <= y; i++) {
    const stack = [];
    const bi = arr[i / 2];
    if (bi) stack.push(bi);

    const tri = arr[i / 3];
    if (tri) stack.push(tri);

    const plus = arr[i - n];
    if (plus) stack.push(plus);

    if (stack.length) arr[i] = Math.min(...stack) + 1;
  }

  return arr[y] - 1 || -1;
};
