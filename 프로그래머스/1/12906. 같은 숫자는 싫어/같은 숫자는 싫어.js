const solution = (arr) => arr.reduce((acc, cur) => {
    if(!acc.length || acc[acc.length - 1] !== cur) acc.push(cur);
    return acc;
}, []);