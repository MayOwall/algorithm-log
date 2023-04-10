// 1.
const solution = (arr) => arr.filter((v, idx) => arr[idx - 1] !== v);

// 2.
const solution2 = (arr) => arr.filter((v, i, a) => v !== a[i - 1]);
