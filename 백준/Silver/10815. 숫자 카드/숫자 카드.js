const fs = require("fs");
let [N, cards, M, targets] = fs
  .readFileSync("/dev/stdin").toString().split("\n");

cards = cards.split(" ");
targets = targets.split(" ");

const obj = {};
cards.forEach((v) => (obj[v] = true));

targets.map((target, i) => {
  obj[target] ? (targets[i] = 1) : (targets[i] = 0);
});

console.log(targets.join(" "));
