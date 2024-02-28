const solution = (participant, completion) => {
    // paticipant와 completion을 알파벳에 따라 정렬한다.
    participant = participant.sort();
    completion = completion.sort();
    
    // participant 순회하며 같은 인덱스의 completion과 다른 값이 있는지 확인한다.
    for(let i = 0; i < participant.length; i++) {
        const curParticipant = participant[i];
        const curCompletion = completion[i];
        
        // 다른 값이 있다면 해당 participant 값을 리턴한다.
        if(curParticipant !== curCompletion) return curParticipant;
    }
}