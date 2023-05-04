const solution = (a, b, c, d) => {
  const obj = {};
  [a, b, c, d].forEach((v) => (obj[v] ? (obj[v] += 1) : (obj[v] = 1)));
  const keys = Object.keys(obj).map((v) => v * 1);
  const values = Object.values(obj);

  if (values.length === 1) return 1111 * a;
  if (keys.length === 4) return Math.min(a, b, c, d);

  if (values.includes(3)) {
    const [p, q] = [...new Set(keys)];
    return obj[p] === 3 ? Math.pow(10 * p + q, 2) : Math.pow(10 * q + p, 2);
  }
  if (values.includes(2)) {
    if (values.includes(1)) {
      const [p, q] = keys.filter((v) => obj[v] === 1);
      return p * q;
    } else {
      const [p, q] = [...new Set(keys)];
      return (p + q) * Math.abs(p - q);
    }
  }
};
