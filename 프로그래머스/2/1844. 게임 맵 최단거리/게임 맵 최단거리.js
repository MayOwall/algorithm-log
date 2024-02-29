const arrows = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const solution = (maps) => {
    const queue = [];
    const target = [maps.length - 1, maps[0].length - 1];
    queue.push([0, 0, 1]);
    maps[0][0] = 0;
    
    while(!!queue.length) {
        const cur = queue.shift();
        const [c, r, cnt] = cur;
        if(c === target[0] && r === target[1]) return cnt;
        
        arrows.forEach((arrow) => {
            const next = [c + arrow[0], r + arrow[1], cnt + 1];
            if(!!maps[next[0]] && maps[next[0]][next[1]] === 1) {
                maps[next[0]][next[1]] = 0;
                queue.push(next);
            }
        });
    }
    
    return -1;
}