const solution = (numbers, target) => {
  let answer = 0;

  const dfs = (sum, i) => {
    if (i === numbers.length) {
      if (sum === target) answer += 1;
      return;
    }
    dfs(sum + numbers[i], i + 1);
    dfs(sum - numbers[i], i + 1);
  };

  dfs(0, 0);
  return answer;
};
