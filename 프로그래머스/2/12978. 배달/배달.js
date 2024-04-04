function solution(N, road, K) {
    const roads = [];
    
    // 그래프 생성
    road.forEach(v => {
        const [a, b, c] = v;
        if(!roads[a]) roads[a] = {};
        if(!roads[b]) roads[b] = {};
        roads[a][b] ? roads[a][b].push(c) : roads[a][b] = [c];
        roads[b][a] ? roads[b][a].push(c) : roads[b][a] = [c];
    });
    
    return bfs();
    
    function bfs() {
        const visited = Array.from({length : N + 1}, () => K);
        const answers = Array.from({length : N + 1}, () => false);
        visited[1] = 0;
        answers[1] = true;
        const toVisit = [[1, 0]];
        let count = 0;
        
        while(toVisit.length) {
            const cur = toVisit.shift();
            const [curIdx, acc] = cur;
            const nexts = Object.keys(roads[curIdx]);
            nexts.forEach(next => {
                roads[curIdx][next].forEach(time => {
                    if(time + acc <= K && time + acc <= visited[next]) {
                        answers[next] = true;
                        visited[next] = time + acc;
                        toVisit.push([next, time + acc]);
                    }
                })
            });
        }
        
        return answers.filter(v => v).length;
    }
    
}

