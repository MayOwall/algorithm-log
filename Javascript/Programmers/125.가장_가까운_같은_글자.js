const solution = (s) =>
  [...s].map((v, idx) => {
    const answer = s.slice(0, idx).split("").reverse().indexOf(v);
    return answer === -1 ? -1 : answer + 1;
  });
