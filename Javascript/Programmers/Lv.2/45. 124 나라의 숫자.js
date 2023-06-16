const solution = (n) => {
  const arr = ["4", "1", "2"];
  let answer = "";

  while (n > 0) {
    answer = arr[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
};
