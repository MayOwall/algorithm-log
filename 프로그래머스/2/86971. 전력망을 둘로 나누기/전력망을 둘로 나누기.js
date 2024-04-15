const getTree = (n, arr) => {
    const tree = Array.from({length : n + 1}, (_, i) => !i ? null : []);
    arr.forEach(v => {
        if(!tree[v[0]].includes(v[1])) tree[v[0]].push(v[1]);
        if(!tree[v[1]].includes(v[0])) tree[v[1]].push(v[0]);
    });
    
    return tree;
}

function DFS(tree) {  
    const first = tree.findIndex(v => v && v.length);
    
    const visited = [];
    const toVisit = [first];
    let count = 0;
    
    while(toVisit.length) {
        const cur = toVisit.pop();
        visited[cur] = true;
        count += 1;
        
        const nexts = tree[cur].filter(v => !visited[v]);
        toVisit.push(...nexts);
    };
    
    return count;
};

function solution(n, wires) {
    let answer = n;
    
    wires.forEach((v, i) => {
        const nodes = [...wires.slice(0, i), ...wires.slice(i + 1)];
        const tree = getTree(n, nodes);
        const left = DFS(tree);
        const diff = Math.abs((left * 2) - n);
        if(answer > diff) answer = diff;
    })
    
    return answer;
}