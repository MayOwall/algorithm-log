const closet = {};

const solution = (clothes) => {
  clothes.forEach(([_, type]) =>
    closet[type] ? (closet[type] += 1) : (closet[type] = 1)
  );
  const answer =
    Object.keys(closet).reduce((acc, cur) => acc * (closet[cur] + 1), 1) - 1;
  return answer;
};
