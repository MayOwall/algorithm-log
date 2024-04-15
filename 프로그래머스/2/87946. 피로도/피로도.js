function solution(k, dungeons) {
    let answer = 0;
    
    const search = (k, lefts, count) => {
        if(answer < count) answer = count;
        
        const nextAbleLefts = lefts.filter(left => left[0] <= k);
        nextAbleLefts.forEach((next, i) => {
            const nextK = k - next[1];
            const nextLefts = [...nextAbleLefts.slice(0, i), ...nextAbleLefts.slice(i + 1)];
            search(nextK, nextLefts, count + 1);
        })
    };
    
    search(k, dungeons, 0);
    return answer;
}