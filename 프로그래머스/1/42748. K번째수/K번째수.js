const solution = (array, commands) => {
    const answer = commands.map(cmd => getK(array, cmd));
    return answer;
}

const getK = (arr, cmd) => {
    const [start, end, idx] = cmd;
    const K = arr.slice(start - 1, end).sort((a, b) => a - b)[idx - 1];
    return K;
}