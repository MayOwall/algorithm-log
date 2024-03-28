function solution (n, times) {
    let left = 0;
    let right = Math.pow(2, 52);
    let count = 0;
    
    while(count++ < 54 && left <= right) {
        const mid = Math.ceil((left + right) / 2);
        if(isAble(mid)) {
            right = mid - 1;
            continue;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
    
    function isAble (time) {
        const capacity = times.map(v => Math.floor(time / v)).reduce((acc, cur)=> acc + cur);
        return n <= capacity;
    }
}