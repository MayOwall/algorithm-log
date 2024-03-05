// (이 들어올 때 마다 0을 더해준다.
// ()이 들어오면 배열의 모든 수에 1을 더해준다.
// )이 들어오면 배열의 마지막 수 + 1 값을 count에 더해주고 pop한다.

let sticks = 0;
let answer = 0;

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

for (let i = 0; i < input.length; i++) {
  const str = input[i];
  if (str === "(" && input[i + 1] === ")") {
    answer += sticks;
    i += 1;
  } else if (str === "(") {
    sticks += 1;
  } else {
    sticks -= 1;
    answer += 1;
  }
}

console.log(answer);
