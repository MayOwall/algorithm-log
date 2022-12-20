const solution = (num, total) => {
  let first =
    num % 2 === 0
      ? Math.floor(total / (num / 2) / 2) - num / 2 + 1
      : total / num - Math.floor(num / 2);

  return new Array(num).fill(0).map((_, idx) => first + idx);
};
