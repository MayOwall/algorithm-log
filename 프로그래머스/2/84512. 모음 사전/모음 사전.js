function solution(word) {
    const dic = [];
    const search = (cur, lefts) => {
        dic.push(cur);
        if(cur.length === 5) return;
        
        lefts.forEach((left, i) => {
            const nextCur =`${cur}${left}`;
            search(nextCur, lefts);
        });
    };
    
    search('', ['A', 'E', 'I', 'O', 'U']);
    return dic.findIndex(v => v === word);
}