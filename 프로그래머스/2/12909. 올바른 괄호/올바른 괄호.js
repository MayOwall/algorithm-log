function solution(s) {
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        const cur = s[i];
        if(cur === '(') {
            stack.push(cur);
            continue;
        }
        if(!stack.length) return false;
        stack.pop();
    };
    return !stack.length;
}