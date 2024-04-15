function getGraph(n, computers) {
    const arr = Array.from({length : n}, () => []);
    computers.forEach((computer, i) => {
        computer.forEach((target, j) => {
            if(i === j) return;
            if(!target) return;

            if(!arr[j].includes(i)) arr[j].push(i);
            if(!arr[i].includes(j)) arr[i].push(j);
        })
    });
    
    return arr;
}


function solution(n, computers) {
    const graph = getGraph(n, computers);
    const visited = Array.from({length : n}, () => false);
    let count = 0;
    
    function DFS(start) {
        const toVisit = [start];

        while(toVisit.length) {
            const cur = toVisit.pop();
            visited[cur] = true;
            const nexts = graph[cur].filter(v => !visited[v]);
            toVisit.push(...nexts);
        };
    }   

    while(true) {
        const start = visited.findIndex(v => !v);
        if(start == -1) break;
        
        count += 1;
        DFS(start);
    };
    
    return count;
}