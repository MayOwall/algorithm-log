const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [a, b, v] = n.split(" ").map((v) => v * 1);
let graph = [];

inputs.forEach((input) => {
  const [a, b] = input.split(" ").map((v) => v * 1);

  if (!graph[a]) graph[a] = [];
  if (!graph[a][b]) graph[a][b] = b;

  if (!graph[b]) graph[b] = [];
  if (!graph[b][a]) graph[b][a] = a;
});

graph = graph.map((v) => v.filter((v) => v).sort((a, b) => a - b));

const search = (type) => {
  let toVisit = [v];
  const isVisit = [];
  const log = [];

  while (toVisit.length) {
    const cur = type === "bfs" ? toVisit.shift() : toVisit.pop();
    if (isVisit[cur]) continue;

    isVisit[cur] = true;
    log.push(cur);

    if(!graph[cur]) return log.join('');
    const nexts = graph[cur].filter((v) => !isVisit[v]);
    toVisit =
      type === "bfs"
        ? [...toVisit, ...nexts]
        : [...toVisit, ...nexts.reverse()];
  }

  return log.join(" ");
};

console.log(`${search("dfs")}\n${search("bfs")}`);
