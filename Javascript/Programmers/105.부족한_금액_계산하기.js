const solution = (price, money, count) => {
  const result =
    new Array(count)
      .fill(null)
      .reduce((acc, _, idx) => acc + price * (idx + 1), 0) - money;
  return result > 0 ? result : 0;
};
