const solution = (nums) => {
    // 포켓몬의 가지수를 고른다.
    const typeNums = [...new Set(nums)].length;
    // 포켓몬 수의 절반과 포켓몬의 가지수 중 더 작은 것을 리턴한다.
    const mid = Math.floor(nums.length / 2);
    
    return mid > typeNums ? typeNums : mid;
}