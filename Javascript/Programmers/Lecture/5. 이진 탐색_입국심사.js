const solution = (n, times) => {
  const sortted = times.sort((a, b) => a - b);
  let left = 1;
  let right = sortted[sortted.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(left, right);
  return left - 1;
};
