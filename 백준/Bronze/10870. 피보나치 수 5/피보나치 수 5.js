const N = require("fs").readFileSync("/dev/stdin").toString().trim() * 1;

if (N === 0) return console.log(N);

const getFabonachi = (n, a, acc) => {
  if (!n) return acc;
  const fabonachi = a + acc;
  return getFabonachi(n - 1, acc, fabonachi);
};

console.log(getFabonachi(N - 1, 0, 1));
