const solution = (arr, intervals) =>
  intervals.map(([a, b]) => arr.slice(a, b + 1)).flat();
