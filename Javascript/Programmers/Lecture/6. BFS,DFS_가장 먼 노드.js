// 1. 그래프 만들기 (양방향으로!)
// 2. 각 정점의 거리를 알 수 있는 배열 만들기 (BFS)

const solution = (n, vertex) => {
  const graph = [];
  vertex.forEach(([a, b]) => {
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
    graph[b] ? graph[b].push(a) : (graph[b] = [a]);
  });

  const dist = new Array(n + 1).fill(0);
  const queue = [1];
  dist[1] = 1;

  while (queue.length > 0) {
    const cur = queue.shift();
    for (const each of graph[cur]) {
      if (dist[each] === 0) {
        queue.push(each);
        dist[each] = dist[cur] + 1;
      }
    }
  }

  const max = Math.max(...dist);
  return dist.filter((v) => v === max).length;
};
