const [count, _, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

if (!inputs.length) return console.log(0);

const network = Array.from({ length: count * 1 }, () => []);

inputs.forEach((input) => {
  const [a, b] = input.split(" ").map((v) => v * 1);
  if (!network[a]) network[a] = [];
  if (!network[b]) network[b] = [];
  if (!network[a].includes(b)) network[a].push(b);
  if (!network[b].includes(a)) network[b].push(a);
});

const visited = [];
const toVisit = [1];

while (toVisit.length) {
  const cur = toVisit.shift();
  if (visited.includes(cur)) continue;

  visited.push(cur);
  const nexts = network[cur];
  if (nexts.length) toVisit.push(...nexts);
}

console.log(visited.length - 1);
