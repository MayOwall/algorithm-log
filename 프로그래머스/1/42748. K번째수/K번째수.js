function solution(array, commands) {
    const getTarget = (cmd) => {
        const [i, j, k] = cmd;
        const targets = array.slice(i - 1, j).sort((a, b) => a - b);
        return targets[k - 1];
    };
    
    return commands.map(cmd => getTarget(cmd));
}