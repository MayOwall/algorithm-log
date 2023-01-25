const solution = (arr1, arr2) => {
  const answer = [];

  arr1.forEach((n) => {
    const temp = [];
    for (let i = 0; i < arr2[0].length; i++) {
      temp.push(n.reduce((acc, cur, idxN) => acc + cur * arr2[idxN][i], 0));
    }
    answer.push(temp);
  });

  return answer;
};
