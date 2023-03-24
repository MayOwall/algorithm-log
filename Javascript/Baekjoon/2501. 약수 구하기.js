const [a, b] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split(" ");

let counter = 0;
for (let i = 1; i <= Number(a); i++) {
  if (!(Number(a) % i)) counter += 1;
  if (counter == b) {
    console.log(i);
    return;
  }
}

console.log(0);
