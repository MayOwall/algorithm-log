// 듣, 보, 듣과 보 리스트를 구한다.

const [nums, ...lists] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N] = nums.split(" ");
const listsN = lists.slice(0, N * 1);
const listsM = lists.slice(N * 1);

// 듣 리스트를 순회하면서 객체 A를 만든다.

const objA = listsN.reduce((acc, cur) => {
  acc[cur] = true;
  return acc;
}, {});

// 보 리스트를 순회하면서 객체 A에 해당 보가 있으면 정답 리스트에 넣는다.

const answer = listsM.filter((v) => objA[v]).sort();

// 사전순으로 sort하여 console한다.

console.log(answer.length);
console.log(answer.join("\n"));
