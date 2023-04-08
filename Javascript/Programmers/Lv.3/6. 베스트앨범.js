// 1
const solution2 = (genres, plays) => {
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

// 2023.04.07
const solution = (genres, plays) => {
  const record = {};

  genres.forEach((genre, i) => {
    // 해당 장르가 없다면 장르 추가
    if (!record[genre]) {
      record[genre] = {
        total: 0,
        songs: [],
      };
    }
    // 장르에 총 횟수와 노래 추가
    record[genre].total += plays[i];
    record[genre].songs.push([i, plays[i]]);
  });

  console.log(record);
  // 가장 많이 플레이된 두 장르 알아내기
  const bestGenres = Object.keys(record)
    .sort((a, b) => record[b].total - record[a].total)
    .slice(0, 2);

  // 각 장르별 가장 많이 플레이된 노래 2개 찾기
  const answer = bestGenres.map((key) => {
    const sorttedSongs = record[key].songs.sort((a, b) => b[1] - a[1]);

    console.log(sorttedSongs);
    // .slice(0, 2)
    // .map(([i, _]) => i);
  });

  return answer.flat();
};
