function solution(sizes) {
    const ver = [];
    const hor = [];
    
    sizes.forEach(v => {
        const [min, max] = v.sort((a, b) => a - b);
        ver.push(min);
        hor.push(max);
    });
    
    return Math.max(...ver) * Math.max(...hor);
}