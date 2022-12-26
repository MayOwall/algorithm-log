const solution = (array) => {
  const counts = new Array(Math.max(...array) + 1).fill(0);
  array.forEach((v) => (counts[v] += 1));
  const max = Math.max(...counts);
  const maxCount = counts.filter((v) => v === max).length;
  return maxCount > 1 ? -1 : counts.indexOf(max);
};
