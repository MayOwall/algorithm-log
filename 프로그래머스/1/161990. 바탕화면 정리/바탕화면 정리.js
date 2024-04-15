function solution(wallpaper) {
    const colLength = wallpaper.length;
    const rowLength = wallpaper[0].length;
    
    let minRow = rowLength;
    let maxRow = 0;
    let minCol = colLength;
    let maxCol = 0;
    
    for(let c = 0; c < colLength; c++) {
        for(let r = 0; r < rowLength; r++) {
            const cur = wallpaper[c][r];
            if(cur !== '#') continue;
            minRow = Math.min(minRow, r);
            maxRow = Math.max(maxRow, r + 1);
            minCol = Math.min(minCol, c);
            maxCol = Math.max(maxCol, c + 1);
        }
    };
    
    return [minCol, minRow, maxCol, maxRow];
}