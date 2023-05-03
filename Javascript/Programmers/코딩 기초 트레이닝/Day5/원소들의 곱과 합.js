const solution = (num_list) => {
  const multiSum = num_list.reduce((acc, cur) => acc * cur);
  const plusSum = Math.pow(
    num_list.reduce((acc, cur) => acc + cur),
    2
  );
  return multiSum < plusSum ? 1 : 0;
};
