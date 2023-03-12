const word = require("fs").readFileSync("BaekjoonEx.txt").toString().trim();

let answer = "";

for (let i = 97; i < 123; i++) {
  const cur = String.fromCharCode(i);
  answer += ` ${word.indexOf(cur)}`;
}

console.log(answer.slice(1));
