const solution = (a, b) => a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
