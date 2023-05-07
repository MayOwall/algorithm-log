const solution = (numbers, n) => {
  let sum = 0;
  let count = 0;

  while (sum <= n) {
    sum += numbers[count];
    count += 1;
  }
  return sum;
};
