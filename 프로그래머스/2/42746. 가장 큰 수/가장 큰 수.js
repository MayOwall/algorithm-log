function solution(numbers) {
    if(!numbers.map(v => v * 1).reduce((acc, cur) => acc + cur)) return '0';
    return numbers.sort((a, b) => {
        const front = Number(`${a}${b}`);
        const back = Number(`${b}${a}`);
        return front > back ? -1 : front === back ? 0 : 1;
    }).join('');
}