let [_, ...chessboard] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [M, N] = _.split(" ");
chessboard = chessboard.map((v) => v.split(""));

const colLength = M - 7;
const rowLength = N - 7;
const whiteChessboard =
  "WBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBW";
const blackChessboard =
  "BWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWB";

const getPaintNum = (col, row) => {
  let blackPaint = 0;
  let whitePaint = 0;

  for (let i = col; i <= col + 7; i++) {
    for (let j = row; j <= row + 7; j++) {
      const num = (i - col) * 8 + (j - row);
      if (blackChessboard[num] !== chessboard[i][j]) blackPaint += 1;
      if (whiteChessboard[num] !== chessboard[i][j]) whitePaint += 1;
    }
  }

  return Math.min(blackPaint, whitePaint);
};

const paintCases = [];

for (let col = 0; col < colLength; col++) {
  for (let row = 0; row < rowLength; row++) {
    paintCases.push(getPaintNum(col, row));
  }
}

console.log(Math.min(...paintCases));
