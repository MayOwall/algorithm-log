const DFS = (graph, firstNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(firstNode);

  while (!!needVisit.length) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }

  return visited;
};

// const graph = {
//   A: ["B", "C"],
//   B: ["A", "D"],
//   C: ["A", "G", "H", "I"],
//   D: ["B", "E", "F"],
//   E: ["D"],
//   F: ["D"],
//   G: ["C"],
//   H: ["C"],
//   I: ["C", "J"],
//   J: ["I"],
// };

// console.log(DFS(graph, "A"));
