const solution = (lottos, win_nums) => {
  const [deleted, correct] = lottos.reduce(
    (acc, cur) => {
      if (cur === 0) return [acc[0] + 1, acc[1]];
      if (win_nums.includes(cur)) return [acc[0], acc[1] + 1];
      return acc;
    },
    [0, 0]
  );

  return [
    7 - correct - deleted > 6 ? 6 : 7 - correct - deleted,
    7 - correct > 6 ? 6 : 7 - correct,
  ];
};

// 예전 풀이
/*
function solution(lottos, win_nums) {
    let damagedNumCount = 0;
    let matchingNumCount = 0;
   
    lottos.forEach(num => {
        if(num === 0) {
            damagedNumCount += 1;
        } else if (win_nums.includes(num)) {
            matchingNumCount += 1;
        };
    });
    
    const min = matchingNumCount > 1 ? Math.abs(matchingNumCount - 7) : 6;
    const max = matchingNumCount + damagedNumCount > 1 
    ? Math.abs((matchingNumCount + damagedNumCount) - 7)
    : 6;
    
    return [max, min];
}
*/
