const [count, ...arr] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < count; i++) {
  const [num, word] = arr[i].split(" ");
  const next = word
    .split("")
    .map((v) => new Array(Number(num)).fill(v).join(""))
    .join("");
  console.log(next);
}
