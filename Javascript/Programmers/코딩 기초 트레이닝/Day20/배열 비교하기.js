const calc = (arr) => arr.reduce((acc, cur) => acc + cur);
const solution = (arr1, arr2) => {
  if (arr1.length > arr2.length) return 1;
  if (arr1.length < arr2.length) return -1;
  if (arr1.length === arr2.length) {
    const sum1 = calc(arr1);
    const sum2 = calc(arr2);
    if (sum1 > sum2) return 1;
    if (sum1 < sum2) return -1;
    if (sum1 === sum2) return 0;
  }
};
