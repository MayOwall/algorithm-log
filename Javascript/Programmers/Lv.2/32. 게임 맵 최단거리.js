const arrows = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const solution = (maps) => {
  const C = maps.length - 1;
  const R = maps[0].length - 1;
  maps[0][0] = 0;
  const queue = [[0, 0, 1]];

  while (!!queue.length) {
    const [c, r, count] = queue.shift();
    if (c === C && r === R) return count;

    maps[c][r] = 0;
    for (let arrow of arrows) {
      const next = [c + arrow[0], r + arrow[1], count + 1];
      if (!!maps[next[0]] && maps[next[0]][next[1]] === 1) {
        maps[next[0]][next[1]] = 0;
        queue.push(next);
      }
    }
  }

  return -1;
};
