const solution = (numbers) => {
  numbers.sort((a, b) => a - b);

  const case1 = numbers[0] * numbers[1];
  const case2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];

  return case1 > case2 ? case1 : case2;
};
