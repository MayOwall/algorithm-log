const solution = (array, commands) =>
  commands.map(
    ([start, end, num]) =>
      array.slice(start - 1, end).sort((a, b) => a - b)[num - 1]
  );
