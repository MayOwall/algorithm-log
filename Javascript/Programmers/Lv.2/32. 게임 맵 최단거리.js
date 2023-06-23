const arrows = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const solution = (maps) => {
  const queue = [[0, 0, 0]];

  while (!!queue.length) {
    const [c, r, cnt] = queue.shift();
    if (c + 1 === maps.length && r + 1 === maps[0].length) {
      return cnt + 1;
    }

    arrows.forEach((arrow) => {
      const [addC, addR] = arrow;
      if (maps[c + addC] && maps[c + addC][r + addR] === 1) {
        maps[c + addC][r + addR] = 0;
        queue.push([c + addC, r + addR, cnt + 1]);
      }
    });
  }
  return -1;
};
