const solution = (n, t, m, p) =>
  Array.from({ length: t * m }, (_, i) => i.toString(n).toUpperCase().split(""))
    .flat()
    .reduce((acc, cur, i) => {
      if (i % m === p - 1) return [...acc, cur];
      return acc;
    }, [])
    .slice(0, t)
    .join("");
