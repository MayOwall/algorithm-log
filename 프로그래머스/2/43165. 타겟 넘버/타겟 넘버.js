function solution(numbers, target) {
    let answer = 0;
    
    const search = (num, lefts) => {
        if(!lefts.length) {
            if(num === target) answer += 1;
            return;
        };
        search(num + lefts[0], lefts.slice(1));
        search(num - lefts[0], lefts.slice(1));
    };
    
    search(0, numbers);
    return answer;
}