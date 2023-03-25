const [num, ...cases] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

const arrX = [];
const arrY = [];

cases.forEach((v) => {
  const [x, y] = v.split(" ");
  arrX.push(Number(x));
  arrY.push(Number(y));
});

arrX.sort((a, b) => a - b);
arrY.sort((a, b) => a - b);

console.log(
  (arrX[arrX.length - 1] - arrX[0]) * (arrY[arrY.length - 1] - arrY[0])
);
