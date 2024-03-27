function solution(maps) {
    const m = maps.length - 1;
    const n = maps[0].length - 1;
    const moves = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 동, 남, 서, 북
    let toVisit = [[0, 0, 1]];
    
    while(toVisit.length) {
        const [col, row, count] = toVisit[0];
        toVisit = toVisit.slice(1);
        
        if(col === m && row === n) {
            return count;
        }

        for(let i = 0; i < moves.length; i++) {
            const [y, x] = moves[i];
            const nextCol = col + y;
            const nextRow = row + x;
            if(maps[nextCol] && maps[nextCol][nextRow]) {
                maps[nextCol][nextRow] = 0;
                toVisit.push([nextCol, nextRow, count + 1])
            }
        };
    };
    
    return -1;
}