const solution = (arr, queries) => {
  const answer = [];
  queries.forEach(([s, e, k]) => {
    const sliceArr = arr.slice(s, e + 1);
    const filtered = sliceArr.filter((v) => v > k);
    answer.push(filtered.length ? Math.min(...filtered) : -1);
  });
  return answer;
};
