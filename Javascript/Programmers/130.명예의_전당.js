const solution = (k, score) => {
  const answer = [];
  for (let i = 0; i < score.length; i++) {
    const honor = score
      .slice(0, i + 1)
      .sort((a, b) => b - a)
      .slice(0, k);
    answer.push(honor[honor.length - 1]);
  }
  return answer;
};
