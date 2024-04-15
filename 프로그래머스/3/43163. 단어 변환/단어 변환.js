function solution(begin, target, words) {
    const graph = {};
    words = [begin, ...words];
    
    words.forEach(word => {
        const ableWords = words.filter(v => {
            if(v === word) return false;
            let count = 0;
            for(let i = 0; i < v.length; i++) {
                if(v[i] !== word[i]) {
                    if(count) return false;
                    count += 1;
                };
            }
            return true;
        });
        graph[word] = ableWords;
    });
    
    const visited = {};
    const toVisit = [[begin, 0]];
    
    while(toVisit.length) {
        const [word, count] = toVisit.shift();
        if(word === target) {
            return count;
        };
        
        const nexts = graph[word].filter(v => !visited[v]);
        nexts.forEach(next => {
            visited[next] = true;
            toVisit.push([next, count + 1]);
        })
    };
    
    return 0;
}