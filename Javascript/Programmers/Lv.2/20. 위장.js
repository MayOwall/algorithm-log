const solution = (clothes) => {
  const closet = {};
  clothes.forEach(([a, b]) =>
    closet[b] ? closet[b].push(a) : (closet[b] = [a])
  );

  const answer =
    clothes.length +
    (Object.values(closet).length > 1
      ? Object.values(closet).reduce((acc, cur) => acc * cur.length, 1)
      : 0);
  return answer;
};

// 예전 풀이
/*
function solution(clothes) {
    let answer = 1;
    const clothInfo = {};
    
    clothes.forEach(a => {
        const [name, type] = a;
        clothInfo[type] ? clothInfo[type].push(name) : clothInfo[type] = [name];
    });
    
    
    for(const key in clothInfo) {
        answer *= clothInfo[key].length + 1;
    };
    
    return answer - 1;
}
*/
