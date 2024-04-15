function solution(priorities, location) {
    const works = priorities.map((priority, i) => [priority, i]);
    priorities.sort((a, b) => a - b);
    let count = 0;
    
    while(works.length) {
        const work = works.shift();
        const [priority, id] = work;
        
        if(priority !== priorities[priorities.length - 1]) {
            works.push(work);
            continue;
        };
        
        count += 1;
        priorities.pop();
        
        if(id === location) return count;
    };
}