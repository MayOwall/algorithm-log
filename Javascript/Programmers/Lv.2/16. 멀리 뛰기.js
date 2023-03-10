const solution = (n) => {
  return fibonacci(n);
};

const fibonacci = (n) => {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
};
