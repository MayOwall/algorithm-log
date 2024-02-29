const solution = (numbers, target) => {
    let result = 0;
    
    const dfs = (acc, nums) => {
        if(!nums.length) {
            if(acc === target) result += 1;
            return;
        }
        const [num, ...nextNums] = nums;
        dfs(acc + num, nextNums);
        dfs(acc - num, nextNums);
    };
    
    dfs(0, numbers)
    return result;
}