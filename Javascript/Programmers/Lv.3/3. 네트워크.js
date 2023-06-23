const solution = (n, computers) => {
  const isVisit = Array.from({ length: n }, () => false);
  let answer = 0;

  const dfs = (i) => {
    isVisit[i] = true;
    computers[i].forEach((isConnect, nextI) => {
      if (isConnect === 1 && !isVisit[nextI]) dfs(nextI);
    });
  };

  computers.forEach((com, i) => {
    if (isVisit[i]) return;
    answer += 1;
    dfs(i);
  });

  return answer;
};
