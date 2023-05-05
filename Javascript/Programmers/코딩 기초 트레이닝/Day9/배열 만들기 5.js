const solution = (intStrs, k, s, l) =>
  intStrs.map((v) => v.slice(s, s + l) * 1).filter((v) => v > k);
