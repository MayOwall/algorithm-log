const solution = (arr, k) =>
  k % 2 ? arr.map((v) => v * k) : arr.map((v) => v + k);
