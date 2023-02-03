const solution = (n, works) => {
  // 야근이 없을 때 => 0리턴
  const sum = works.reduce((acc, cur) => acc + cur, 0);
  if (sum <= n) return 0;

  // 야근이 있을 때 (밑수를 최대한 균일하게 작게 만들어 줘야 할 것 같아)
  works.sort((a, b) => b - a);

  // n이 남아있는 동안 while을 돌리면서
  while (n > 0) {
    // 현재 가장 큰 수
    const num = works[0];
    // num이 0이면 순회 중지!
    if (!num) break;

    for (let i = 0; i < works.length; i++) {
      // 만약 n을 다 썼거나 현재 순회하는 수가 가장 큰 수가 아니면 순회 중지
      if (n === 0 || works[i] !== num) break;
      // 그 외에는 순회~
      works[i] -= 1;
      n--;
    }
  }

  const answer = works.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
  return answer;
};
