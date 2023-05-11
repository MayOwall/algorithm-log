const nums = [1, 2, 4, 8, 16, 32, 64, 128, 356, 712, 1424];
const solution = (arr) => {
  let minLength = 1;
  while (minLength < arr.length) minLength *= 2;
  return [...arr, ...Array.from({ length: minLength - arr.length }, () => 0)];
};
