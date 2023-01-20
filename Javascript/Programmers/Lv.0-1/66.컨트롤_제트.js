const solution = (s) =>
  s
    .split(" ")
    .reduce(
      (acc, cur, idx, arr) =>
        cur === "Z" ? acc - Number(arr[idx - 1]) : acc + Number(cur),
      0
    );
