const solution = (A, B) => {
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  let count = 0;

  A.forEach((num) => {
    if (num < B[B.length - 1]) {
      count++;
      B.pop();
    }
  });

  return count;
};
