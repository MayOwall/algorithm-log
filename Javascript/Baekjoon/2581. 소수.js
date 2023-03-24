const [s, e] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

let sum = 0;
let smallest = null;

outer: for (let i = Number(s); i <= Number(e); i++) {
  if (i === 1) continue outer;
  for (let j = 2; j <= i / 2; j++) {
    if (!(Number(i) % j)) continue outer;
  }
  if (!smallest) smallest = i;
  sum += Number(i);
}

!smallest ? console.log(-1) : console.log(`${sum}\n${smallest}`);
