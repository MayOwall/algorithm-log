const solution = (n) => {
  let answer = 2;
  while (answer++) if (!((n - 1) % answer)) return answer;
};
