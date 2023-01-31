const solution = (n, t, m, p) =>
  Array.from({ length: t * m }, (_, idx) =>
    idx.toString(n).toUpperCase().split("")
  )
    .flat()
    .filter((_, idx) => idx % m === p - 1)
    .slice(0, t)
    .join("");

// 예전 풀이
/*
const solution = (n, t, m, p) => {
  const answer = [];
  const queue = [];
  let currentNum = -1;
  let count = -1;

  while (answer.length !== t) {
    count++;
    // queue가 비어있으면 currentNum에 +1을 하고 진법을 전환해서 split해 queue에 넣기
    if (!queue.length) {
      currentNum += 1;
      const word = currentNum.toString(n);
      queue.push(...word.split(""));
    }
    // queue에서 한글자씩 뽑기
    const letter = queue.shift();
    // 만약 count가 p의 포지션과 동일하다면 answer에 넣어주기
    if (count % m === p - 1) {
      answer.push(letter);
    }
  }
  // answer.join('')을 리턴하기
  return answer.join("").toUpperCase();
};
*/
