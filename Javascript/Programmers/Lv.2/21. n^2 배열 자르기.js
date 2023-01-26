// const solution = (n, left, right) => {
//   const arr = new Array(n)
//     .fill(new Array(n).fill(null))
//     .map((c, idxC) => c.map((_, idxR) => (idxR > idxC ? idxR + 1 : idxC + 1)))
//     .flat()
//     .slice(left, right + 1);

//   return arr;
// };

const solution = (n, left, right) =>
  Array.from({ length: right - left + 1 }, (_, i) =>
    Math.max(Math.floor((i + left) / n) + 1, ((i + left) % n) + 1)
  );
