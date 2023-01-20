const solution = (balls, share) => {
  const nume = new Array(share)
    .fill(null)
    .reduce((acc, _, idx) => acc * (balls - idx), 1);
  const deno = new Array(share)
    .fill(null)
    .reduce((acc, _, idx) => acc * (idx + 1), 1);

  return Math.round(nume / deno);
};
