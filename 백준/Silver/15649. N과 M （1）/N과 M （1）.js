const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const answer = [];
const recursion = (cur, lefts) => {
  if (cur.length == M) {
    answer.push(cur);
    return;
  }

  lefts.forEach((left) => {
    const nextCur = [...cur, left];
    const nextLefts = lefts.filter((v) => v !== left);
    recursion(nextCur, nextLefts);
  });
};

recursion(
  [],
  Array.from({ length: N * 1 }, (_, i) => i + 1)
);

console.log(answer.map((v) => v.join(" ")).join("\n"));
