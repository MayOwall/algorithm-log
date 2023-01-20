const solution = (lines) => {
  const answer = [];
  lines.forEach(([left, right]) => {
    for (let i = left + 100; i < right + 100; i++)
      answer[i] ? (answer[i] += 1) : (answer[i] = 1);
  });

  return answer.reduce((acc, cur) => (cur > 1 ? acc + 1 : acc), 0);
};
