function solution(num_list, n) {
  const answer = [];
  let temp = [];

  num_list.forEach((v, idx) => {
    temp.push(v);
    if ((idx + 1) % n === 0) {
      answer.push(temp);
      temp = [];
    }
  });

  return answer;
}
