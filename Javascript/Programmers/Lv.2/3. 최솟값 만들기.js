const solution = (A, B) => {
  const arrA = A.sort((a, b) => a - b);
  const arrB = B.sort((a, b) => b - a);

  return arrA.reduce((acc, cur, idx) => acc + cur * arrB[idx], 0);
};
