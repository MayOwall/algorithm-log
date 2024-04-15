const [num, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = num.split(" ").map((v) => v * 1);
const mapStr = inputs.slice(0, N + 1);
const map = Array.from({ length: N }, (_, i) =>
  mapStr[i].split("").map((v) => (v === "." ? null : v))
);

map[N - 1][M - 1] = "lose";

const isWin = (n, m) => {
  if (map[n + 1] && map[n + 1][m] === "lose") {
    return true;
  }
  if (map[n][m + 1] === "lose") {
    return true;
  }
  for (let i = 1; i <= K; i++) {
    if (map[n + i] && map[n + i][m + i] === "lose") {
      return true;
    }
  }
  return false;
};

for (let n = N - 1; n >= 0; n--) {
  for (let m = M - 1; m >= 0; m--) {
    const cur = map[n][m];
    if (!!cur) continue;
    map[n][m] = isWin(n, m) ? "win" : "lose";
  }
}

const cases = inputs.slice(N + 1);
const answer = [];

cases.forEach((v) => {
  const [n, m] = v.split(" ").map((v) => v * 1);
  const result = map[n - 1][m - 1];
  answer.push(result === "lose" ? "Second" : "First");
});

console.log(answer.join("\n"));
