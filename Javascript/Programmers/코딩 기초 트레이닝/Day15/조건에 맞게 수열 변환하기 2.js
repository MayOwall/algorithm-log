const trans = (arr) =>
  arr.map(
    (v) => (v >= 50 && !(v % 2) ? v / 2 : v < 50 && v % 2 ? v * 2 + 1 : v),
    0
  );

const solution = (arr) => {
  let x = 0;
  while (true) {
    let before = arr;
    arr = trans(arr);
    if (JSON.stringify(before) === JSON.stringify(arr)) return x;
    x++;
  }
};
