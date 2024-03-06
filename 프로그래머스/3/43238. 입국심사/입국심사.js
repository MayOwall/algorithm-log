const solution = (n, times) => {
  let left = 1;
  let right = n * Math.max(...times);
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const capacivity = getCapacivity(times, mid);
    if (capacivity >= n) {
      right = mid - 1;
      answer = answer > mid ? mid : answer;
    } else {
      left = mid + 1;
    }
  }

  return answer;
};

const getCapacivity = (times, mid) => {
  return times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
};
