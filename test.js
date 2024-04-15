const [N, M] = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => v * 1);

const answers = [];

dfs(1, []);

function dfs(idx, acc) {
  if (acc.length === M) {
    answers.push(acc);
    return;
  }

  for (let i = idx; i <= N; i++) {
    dfs(idx + 1, [...acc, i]);
  }
}

const answer = [
  ...new Set(
    answers.map((v) => {
      const arr = v.sort((a, b) => a - b);
      return arr.join(" ");
    })
  ),
].join("\n");

console.log(answer);
