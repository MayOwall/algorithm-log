// 나의 풀이

const solution = (A, B) => {
  if (A === B) return 0;
  for (let i = 0; i < A.length; i++) {
    const word = A.slice(A.length - i - 1) + A.slice(0, A.length - i - 1);
    if (word === B) return i + 1;
  }
  return -1;
};

// 더 멋진 풀이

const solution2 = (a, b) => (b + b).indexOf(a);
