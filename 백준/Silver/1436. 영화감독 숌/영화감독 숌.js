let targetCount = require("fs").readFileSync("/dev/stdin").toString().trim() * 1;

let count = 0;
let num = 665;

while (count !== targetCount) {
  num += 1;
  const str = num.toString();
  if (str.includes("666")) {
    count += 1;
  }
}

console.log(num);
