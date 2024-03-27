function solution(brown, yellow) {
    const num = brown / 2 + 1;
    for(let col = 3; num >= col + 2; col++) {
        const row = num - col + 1;
        if((col - 2) * (row - 2) === yellow) return [row, col];
    }
}