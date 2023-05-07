const solution = (num_list) => {
  const oddSum = num_list.reduce((acc, cur, i) => (i % 2 ? acc + cur : acc), 0);
  const evenSum = num_list.reduce(
    (acc, cur, i) => (i % 2 ? acc : acc + cur),
    0
  );
  return oddSum > evenSum ? oddSum : evenSum;
};
