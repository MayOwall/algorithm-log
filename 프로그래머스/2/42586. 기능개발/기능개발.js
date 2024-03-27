function solution(progresses, speeds) {
    progresses = progresses.map((v, i) => {
        return Math.ceil((100 - v) / speeds[i]);
    });
    
    const answer = [];
    let count = 1;
    let max = progresses[0];
    
    for(let i = 1; i < progresses.length; i++) {
        const progress = progresses[i];
        if(progress > max) {
            answer.push(count);
            max = progress;
            count = 1;
            continue;
        }
        count += 1;
    };
    
    if(count) answer.push(count);
    return answer;
}