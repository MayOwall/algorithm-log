// case1

const addUpTo1 = (n) => {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
};

// case2

const addUpTo2 = (n) => {
  return (n * (n + 1)) / 2;
};
