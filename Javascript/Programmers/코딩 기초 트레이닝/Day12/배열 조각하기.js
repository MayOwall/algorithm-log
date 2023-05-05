const solution = (arr, query) => {
  query.forEach((v, i) =>
    i % 2 ? (arr = arr.slice(v)) : (arr = arr.slice(0, v + 1))
  );
  return arr;
};
