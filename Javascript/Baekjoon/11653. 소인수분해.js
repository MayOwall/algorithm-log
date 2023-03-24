let input = require("fs").readFileSync("BaekjoonEx.txt").toString().trim() * 1;

if (input === 1) return;

outer: while (true) {
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (!(input % i)) {
      input = input / i;
      console.log(i);
      continue outer;
    }
  }
  break;
}

console.log(input);
