const solution = (n, wires) => {
  let answer = n;

  for (let i = 0; i < wires.length; i++) {
    const tree = makeTree(n, wires, i);
    const startNode = tree.findIndex((v) => !!v.length);
    const nodeCount = countNode(tree, startNode);
    const abs = Math.abs(nodeCount * 2 - n);

    if (abs < answer) answer = abs;
  }

  return answer;
};

const makeTree = (n, wires, exceptIdx) => {
  const tree = Array.from({ length: n + 1 }, () => []);
  wires.forEach((wire, idx) => {
    if (idx === exceptIdx) return;
    const [a, b] = wire;
    tree[a].push(b);
    tree[b].push(a);
  });

  return tree;
};

const countNode = (tree, startNode) => {
  const visited = [];
  let needVisit = [startNode];

  while (!!needVisit.length) {
    const node = needVisit.shift();

    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...tree[node], ...needVisit];
    }
  }

  return visited.length;
};
