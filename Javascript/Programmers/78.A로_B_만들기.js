const solution = (before, after) =>
  JSON.stringify(before.split("").sort()) ===
  JSON.stringify(after.split("").sort())
    ? 1
    : 0;
