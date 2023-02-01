function solution(dirs) {
  let current = [5, 5];
  const arr = [];

  for (const dir of dirs) {
    if (dir === "U") {
      if (current[0] !== 0) {
        const log = [
          `${current[0]}${current[1]}`,
          `${current[0] - 1}${current[1]}`,
        ]
          .sort()
          .join("");
        if (!arr.includes(log)) arr.push(log);
        current[0] -= 1;
      }
    } else if (dir === "D") {
      if (current[0] !== 10) {
        const log = [
          `${current[0]}${current[1]}`,
          `${current[0] + 1}${current[1]}`,
        ]
          .sort()
          .join("");
        if (!arr.includes(log)) arr.push(log);
        current[0] += 1;
      }
    } else if (dir === "R") {
      if (current[1] !== 10) {
        const log = [
          `${current[0]}${current[1]}`,
          `${current[0]}${current[1] + 1}`,
        ]
          .sort()
          .join("");
        if (!arr.includes(log)) arr.push(log);
        current[1] += 1;
      }
    } else if (dir === "L") {
      if (current[1] !== 0) {
        const log = [
          `${current[0]}${current[1]}`,
          `${current[0]}${current[1] - 1}`,
        ]
          .sort()
          .join("");
        if (!arr.includes(log)) arr.push(log);
        current[1] -= 1;
      }
    }
  }

  return arr.length;
}
