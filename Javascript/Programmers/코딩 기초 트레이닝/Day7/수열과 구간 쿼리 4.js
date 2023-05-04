const solution = (arr, queries) => {
  queries.forEach(([s, e, k]) => {
    const isMultiple = !arr.slice(s, e + 1).includes((v) => v % k);
    if (isMultiple) {
      for (let i = s; i <= e; i++) if (!(i % k)) arr[i] += 1;
    }
  });
  return arr;
};
