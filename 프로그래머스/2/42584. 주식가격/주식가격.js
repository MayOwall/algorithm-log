const solution = (prices) => {
    const answer = [];
    prices.forEach((price, i) => {
        let stack = 0;
        
        for(let j = i + 1; j < prices.length; j++){
            stack += 1;
            if(prices[j] < price) break;
        }
        answer.push(stack);
    });
    
    return answer;
}