const move = {
  up: [-1, 0],
  down: [1, 0],
  left: [0, -1],
  right: [0, 1],
};

const solution = (n) => {
  if (n === 1) return [[1]];

  const arr = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => null)
  );
  let [row, col] = [0, 0];
  let dir = "right";

  for (let i = 1; i <= n * n; i++) {
    arr[row][col] = i;
    if (dir === "right" && arr[row][col + 1] !== null) dir = "down";
    if (dir === "down" && (!arr[row + 1] || arr[row + 1][col] !== null))
      dir = "left";
    if (dir === "left" && arr[row] && arr[row][col - 1] !== null) dir = "up";
    if (dir === "up" && arr[row - 1][col] !== null) dir = "right";
    row += move[dir][0];
    col += move[dir][1];
  }
  return arr;
};
