const solution = (operations) => {
    const queue = [];
    operations.forEach(operation => {
        const [order, num] = operation.split(' ');
        if(order === 'I') {
            queue.push(num * 1);
            queue.sort((a, b) => a - b);
        } else {
            if(num === '1') {
                queue.pop();
            } else {
                queue.shift();
            }
        }
    });
    
    return [queue[queue.length - 1] || 0, queue[0] || 0]
}