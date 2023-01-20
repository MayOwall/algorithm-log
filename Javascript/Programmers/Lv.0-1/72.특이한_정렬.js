const solution = (numlist, n) => {
  const arr = [];
  numlist.forEach((v) => {
    const idx = Math.abs(n - v);
    arr[idx] ? arr[idx].push(v) : (arr[idx] = [v]);
  });

  return arr
    .filter((v) => v)
    .map((v) => v.sort((a, b) => b - a))
    .flat();
};
