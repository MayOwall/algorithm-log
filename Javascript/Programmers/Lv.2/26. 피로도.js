function solution(k, dungeons) {
  const isVisited = Array(dungeons.length).fill(false);
  let answer = 0;

  const dfs = (currentK, cnt) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (!isVisited[i] && currentK >= dungeons[i][0]) {
        isVisited[i] = true;
        dfs(currentK - dungeons[i][1], cnt + 1);
        isVisited[i] = false;
      }
    }
    answer = Math.max(answer, cnt);
  };

  dfs(k, 0);

  return answer;
}
