// 1.
const solution = (array, commands) =>
  commands.map(
    ([start, end, num]) =>
      array.slice(start - 1, end).sort((a, b) => a - b)[num - 1]
  );

// 2.
const solution2 = (array, commands) =>
  commands.map(
    ([start, end, i]) =>
      array.slice(start - 1, end).sort((a, b) => a - b)[i - 1]
  );
