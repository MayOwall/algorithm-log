function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i = 0; i < participant.length; i++) {
        const a = participant[i];
        const b = completion[i];
        if(a !== b) return a;
    };
}