function solution(dirs) {
  let cur = [5, 5];
  const arr = [];
  const getLog = (a, b, c, d) => [`${a}${b}`, `${c}${d}`].sort().join("");

  for (const dir of dirs) {
    if (dir === "U") {
      if (cur[0] !== 0) {
        arr.push(getLog(cur[0], cur[1], cur[0] - 1, cur[1]));
        cur[0] -= 1;
      }
    } else if (dir === "D") {
      if (cur[0] !== 10) {
        arr.push(getLog(cur[0], cur[1], cur[0] + 1, cur[1]));
        cur[0] += 1;
      }
    } else if (dir === "R") {
      if (cur[1] !== 10) {
        arr.push(getLog(cur[0], cur[1], cur[0], cur[1] + 1));
        cur[1] += 1;
      }
    } else if (dir === "L") {
      if (cur[1] !== 0) {
        arr.push(getLog(cur[0], cur[1], cur[0], cur[1] - 1));
        cur[1] -= 1;
      }
    }
  }

  return new Set(arr).size;
}
