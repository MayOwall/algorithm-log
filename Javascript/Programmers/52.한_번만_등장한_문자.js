const solution = (s) => {
  const temp = {};
  const answer = [];
  s.split("").forEach((v) => (temp[v] ? (temp[v] += 1) : (temp[v] = 1)));

  for (let a in temp) {
    temp[a] === 1 && answer.push(a);
  }

  return answer.sort().join("");
};
