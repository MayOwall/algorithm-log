const solution = (t, p) =>
  new Array(t.length - p.length + 1)
    .fill(null)
    .reduce(
      (acc, _, idx) =>
        Number(t.slice(idx, idx + p.length)) <= Number(p) ? acc + 1 : acc,
      0
    );
