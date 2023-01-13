const solution = (N, stages) => {
  let num = stages.length;
  const arr = new Array(N + 1).fill(0);

  stages.forEach((v) => (arr[v - 1] = arr[v - 1] + 1));

  return arr
    .slice(0, -1)
    .map((v, idx) => {
      let curNum = num;
      num -= v;
      return [idx + 1, v === 0 ? 0 : v / curNum];
    })
    .sort((a, b) => (a[1] === b[1] ? b - a : b[1] - a[1]))
    .map(([a, b]) => a);
};

// 예전 풀이
/*
function solution(N, stages) {
    class StageInfo {
        constructor(number) {
            this.number = number;
            this.triedNum = 0;
            this.failedNum = 0;
        };
    }
    const arr = [];
    
    for(let i = 0; i <= N; i++) {
        const stageInfo = new StageInfo(i + 1);
        arr.push(stageInfo);
    };
    
    stages.forEach((num) => {
        for(let i = 0; i < num; i++) {
            arr[i].triedNum += 1;
        };
        
        arr[num - 1].failedNum += 1;
    });
    
    
    arr.sort((a, b) => {
        const failRateA = a.failedNum === 0 ? 0 : a.failedNum / a.triedNum;
        const failRateB = b.failedNum === 0 ? 0 : b.failedNum / b.triedNum;
        
        return failRateB - failRateA;
    });
    
    return arr.filter(a => a.number !== N + 1).map(a => a.number);
}
*/
