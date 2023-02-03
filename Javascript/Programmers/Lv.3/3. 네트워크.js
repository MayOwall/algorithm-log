const solution = (n, computers) => {
  const isVisit = Array.from({ length: n }, () => false);
  let answer = 0;

  const dfs = (i) => {
    isVisit[i] = true;
    computers[i].forEach((v, idx) => {
      if (v === 1 && !isVisit[idx]) {
        dfs(idx);
      }
    });
  };

  computers.forEach((_, i) => {
    if (!isVisit[i]) {
      dfs(i);
      answer++;
    }
  });

  console.log(answer);
};
