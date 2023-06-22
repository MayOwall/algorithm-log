const solution = (numbers, target) => {
  let answer = 0;

  const dfs = (arr, sum) => {
    if (!arr.length) {
      if (sum === target) answer += 1;
      return;
    }
    dfs(arr.slice(1), sum + arr[0]);
    dfs(arr.slice(1), sum - arr[0]);
  };

  dfs(numbers, 0);
  return answer;
};
