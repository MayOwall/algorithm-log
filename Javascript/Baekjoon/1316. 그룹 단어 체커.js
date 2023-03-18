const [num, ...words] = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n");

let answer = 0;

outer: for (let i = 0; i < num; i++) {
  const word = words[i];
  const exists = [word[0]];
  for (let j = 1; j < word.length; j++) {
    if (word[j] !== word[j - 1] && exists.includes(word[j])) {
      continue outer;
    }
    if (!exists.includes(word[j])) exists.push(word[j]);
  }
  answer += 1;
}

console.log(answer);
