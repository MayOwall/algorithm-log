// const solution = (n, t) => n * Math.pow(2, t);

const solution = (n) => {
  const arr = new Array(n)
    .fill("")
    .map((_, idx) => new Array(idx + 1).fill("*").join(""));
  console.log(arr);
};
