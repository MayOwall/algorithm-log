const solution = (participant, completion) => {
    const sortP = participant.sort();
    const sortC = completion.sort();
    
    for(let i = 0; i < sortP.length; i++) {
        if(sortP[i] !== sortC[i]) return sortP[i];
    }
}