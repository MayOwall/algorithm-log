const solution = (n, lost, reserve) => {
  const filter = reserve.filter((v) => lost.includes(v));
  const lost2 = lost.filter((v) => !filter.includes(v)).sort((a, b) => a - b);
  let reserve2 = reserve
    .filter((v) => !filter.includes(v))
    .sort((a, b) => a - b);
  let borrow = 0;

  lost2.forEach((v) => {
    if (reserve2.includes(v - 1)) {
      reserve2 = reserve2.filter((a) => a !== v - 1);
      borrow += 1;
    } else if (reserve2.includes(v + 1)) {
      reserve2 = reserve2.filter((a) => a !== v + 1);
      borrow += 1;
    }
  });

  return n - lost2.length + borrow;
};

// 예전 풀이
/*
function solution(n, lost, reserve) {
    let count = 0;
    const lostArr = lost.sort((a, b) => a - b);
     const reserveArr = reserve.sort((a, b) => a - b);
    
    const eliminate = (idx) => {
        reserveArr.splice(idx, 1);
        count += 1;
    };
    
    lostArr.forEach((a, idx) => {
        const itSelfIdx = reserveArr.indexOf(a);
        if(itSelfIdx !== -1) {
            eliminate(itSelfIdx);
            lostArr[idx] = null;
        };
    });
    
    lostArr.filter(v => v !== null).forEach((a,idx) => {
        const beforeIdx = reserveArr.indexOf(a - 1);
        const afterIdx = reserveArr.indexOf(a + 1);
        
        if(beforeIdx !== -1) {
           eliminate(beforeIdx);
        } else if (afterIdx !== -1) {
            eliminate(afterIdx);
        };
    });
    
    return n - (lostArr.length - count);
};
*/
