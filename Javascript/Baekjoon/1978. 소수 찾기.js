const [num, cases] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

const answer = cases.split(" ").filter((num) => {
  if (num == 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (!(Number(num) % i)) return false;
  }
  return true;
});

console.log(answer.length);
