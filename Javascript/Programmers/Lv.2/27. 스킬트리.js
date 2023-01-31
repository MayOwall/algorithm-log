const solution = (skill, trees) => {
  let answer = 0;
  const arr = [...skill];
  const arr2 = trees.map((v) =>
    v
      .split("")
      .filter((l) => arr.includes(l))
      .join("")
  );

  return arr2.reduce(
    (acc, cur) => (skill.slice(0, cur.length) === cur ? acc + 1 : acc),
    0
  );
};
