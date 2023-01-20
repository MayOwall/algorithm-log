const solution = (dots) => {
  const arr = [[], []];
  dots.forEach(([a, b]) => {
    !arr[0].includes(a) && arr[0].push(a);
    !arr[1].includes(b) && arr[1].push(b);
  });
  return Math.abs(arr[0][0] - arr[0][1]) * Math.abs(arr[1][0] - arr[1][1]);
};
