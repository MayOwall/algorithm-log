const solution = (maps) => {
  maps = maps.map((v) => v.split("").map((v) => (v === "X" ? false : v * 1)));
  const answer = [];

  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  const dfs = (y, x, num) => {
    let sum = num;
    maps[y][x] = false;

    for (let i = 0; i < 4; i++) {
      const nextY = y + dy[i];
      const nextX = x + dx[i];
      if (nextY < 0 || maps.length <= nextY) continue;
      if (nextX < 0 || maps[0].length <= nextX) continue;
      if (!maps[nextY][nextX]) continue;

      const next = maps[nextY][nextX];
      sum += dfs(nextY, nextX, next);
    }

    return sum;
  };

  maps.forEach((col, colIdx) => {
    col.forEach((land, rowIdx) => {
      if (!land) return;
      const islandScale = dfs(colIdx, rowIdx, land);
      answer.push(islandScale);
    });
  });

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
};
