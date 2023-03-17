const input = require("fs").readFileSync("BaekjoonEx.txt").toString().trim();

for (let i = 0; i <= Math.ceil(input.length / 2 - 1); i++) {
  if (input[i] !== input[input.length - i - 1]) {
    console.log(0);
    return;
  }
}

console.log(1);
