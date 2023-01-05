// [0, ..., 9] 중 number에 없으면 누산하기

const solution = (numbers) =>
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(
    (acc, cur) => (numbers.includes(cur) ? acc : acc + cur),
    0
  );
