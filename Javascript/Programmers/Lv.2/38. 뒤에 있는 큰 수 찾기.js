const solution = (numbers) => {
  const answer = [];
  const stack = [];

  numbers.forEach((cur, i) => {
    // stack에서 현재 번호보다 작은 숫자가 나오는 동안은 빼서 answer로 치환한다.
    while (!!stack.length && stack[stack.length - 1][0] < cur) {
      const [num, idx] = stack.pop();
      answer[idx] = cur;
    }
    // 다 뺀 후에는 현재 번호를 스택에 넣는다
    stack.push([cur, i]);
  });

  // 순회가 끝난 후에 스택에 남아있는 것은 -1로 변환하여 answer에 넣는다.
  stack.forEach(([num, idx]) => (answer[idx] = -1));
  return answer;
};
