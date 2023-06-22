const getNextIdx = (curIdx, dir) => {
  const [c, r] = curIdx;
  switch (dir) {
    case "U":
      return [c - 1, r];
    case "D":
      return [c + 1, r];
    case "R":
      return [c, r + 1];
    case "L":
      return [c, r - 1];
  }
};

const obj = { U: false, D: false, R: false, L: false };

const solution = (dirs) => {
  let answer = 0;
  let idx = [5, 5];
  const visit = [];
  const map = Array.from({ length: 11 }, () =>
    Array.from({ length: 11 }, () => 1)
  );

  dirs.split("").forEach((dir) => {
    const nextIdx = getNextIdx(idx, dir);
    const [c, r] = nextIdx;
    if (!!map[c] && !!map[c][r]) {
      if (
        !visit.includes(`${idx}${nextIdx}`) &&
        !visit.includes(`${nextIdx}${idx}`)
      ) {
        visit.push(`${idx}${nextIdx}`);
        answer += 1;
      }
      idx = [c, r];
    }
  });

  return answer;
};
