const solution = (genres, plays) => {
  const obj = {};

  for (let i = 0; i < genres.length; i++) {
    if (!obj[genres[i]]) {
      obj[genres[i]] = [0, []];
    }
    const temp = [...obj[genres[i]][1], [plays[i], i]]
      .sort((a, b) => b[0] - a[0])
      .slice(0, 2);
    obj[genres[i]] = [obj[genres[i]][0] + plays[i], temp];
  }

  return Object.keys(obj)
    .sort((a, b) => obj[b][0] - obj[a][0])
    .map((v) => obj[v][1].map((w) => w[1]))
    .flat();
};
