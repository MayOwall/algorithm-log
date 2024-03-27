function solution(prices) {
    const answers = [];
    
    prices.forEach((price, i) => {
        for(let j = i + 1; j < prices.length; j++) {
            if(prices[j] < price) {
                answers.push(j - i);
                return;
            }
        };
        answers.push(prices.length - i - 1);
    });
    
    return answers;
}