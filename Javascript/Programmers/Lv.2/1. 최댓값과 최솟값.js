const solution = (s) => {
  const arr = s.split(" ").map((v) => Number(v));
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
};

// 2023.02.24
const solution2 = (s) => {
  // sort를 해 주는 과정에서 계산으로 인해 숫자로 자동 형변환이 됨.
  const arr = s.split(" ").sort((a, b) => a - b);
  return `${arr[0]} ${arr[arr.length - 1]}`;
};
