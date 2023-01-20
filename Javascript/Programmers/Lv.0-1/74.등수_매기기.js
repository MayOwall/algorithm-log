const solution = (score) => {
  const average = score.map((v) => (v[0] + v[1]) / 2);
  const scoreList = [...average].sort((a, b) => b - a);

  return average.map((v) => scoreList.indexOf(v) + 1);
};
