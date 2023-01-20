const solution = (d, budget) =>
  d
    .sort((a, b) => a - b)
    .reduce(
      (acc, cur) => (acc[0] + cur <= budget ? [acc[0] + cur, acc[1] + 1] : acc),
      [0, 0]
    )[1];

// 이전 풀이
/*
function solution(d, budget) {
    let answer = 0;
    const sorttedD = d.sort((a,b) => a - b);
    
    for (let i = 0; i < sorttedD.length; i++) {
        if(budget - sorttedD[i] < 0) {
            break;
        };
        budget -= sorttedD[i];
        answer += 1;
    }
    return answer;
}
*/
