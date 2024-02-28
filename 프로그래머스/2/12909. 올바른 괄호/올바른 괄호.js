const solution = (s) => {
    let stack = 0;
    for(let i = 0; i < s.length; i++) {
        const v = s[i];
        
        if(v === "(") stack += 1;
        else if(!stack) return false;
        else stack -= 1;
    }
    
    return !stack;
}