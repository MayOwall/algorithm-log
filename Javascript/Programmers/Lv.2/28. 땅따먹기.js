const solution = (land) =>
  Math.max(
    ...land.reduce(
      (a, c) =>
        c.map((v, i) => v + Math.max(...a.filter((_, aIdx) => i !== aIdx))),
      [0, 0, 0, 0]
    )
  );
