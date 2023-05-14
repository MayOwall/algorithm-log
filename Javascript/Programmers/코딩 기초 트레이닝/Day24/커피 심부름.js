const solution = (order) =>
  order.reduce(
    (acc, cur) => (cur.includes("cafelatte") ? acc + 5000 : acc + 4500),
    0
  );
