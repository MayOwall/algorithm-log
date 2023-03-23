let [_, ...cases] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

cases = cases.map((v) => v.split(" "));
const row = Math.max(...cases.map((v) => v[0])) + 10;
const col = Math.max(...cases.map((v) => v[1])) + 10;

const arr = Array.from({ length: row }, () =>
  Array.from({ length: col }, () => 0)
);

cases.forEach((v) => {
  for (let i = Number(v[0]); i < Number(v[0]) + 10; i++) {
    for (let j = Number(v[1]); j < Number(v[1]) + 10; j++) {
      arr[i][j] = 1;
    }
  }
});

console.log(arr.flat().filter((v) => !!v).length);
