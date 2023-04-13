const solution = (name, yearning, photo) => {
  const answer = photo.map((arr) =>
    arr.reduce((acc, cur) => {
      const score = yearning[name.indexOf(cur)];
      return score ? score + acc : acc;
    }, 0)
  );
  return answer;
};
