const solution = (arr, k) => {
  arr = [...new Set(arr)];
  if (arr.length < k) {
    arr = [...arr, ...Array.from({ length: k - arr.length }, () => -1)];
  }
  return arr.slice(0, k);
};
