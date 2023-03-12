const input = require("fs").readFileSync("BaekjoonEx.txt").toString().trim();

let answer = 0;
const count = [
  2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9,
];
for (let i = 0; i < input.length; i++) {
  const num = input.charCodeAt(i) - 65;
  answer += count[num] + 1;
}

console.log(answer);
