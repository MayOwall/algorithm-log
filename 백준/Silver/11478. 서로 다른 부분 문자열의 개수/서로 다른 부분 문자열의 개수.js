const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

const set = new Set();

const getCase = (cur, lefts) => {
  set.add(cur);
  if (!lefts.length) return;

  const nextCur = `${cur}${lefts[0]}`;
  const nextLeft = lefts.slice(1);
  getCase(nextCur, nextLeft);
};

for (let i = 0; i < input.length; i++) {
  const cur = "";
  const lefts = input.slice(i);
  getCase(cur, lefts);
}

console.log([...set].length - 1);
