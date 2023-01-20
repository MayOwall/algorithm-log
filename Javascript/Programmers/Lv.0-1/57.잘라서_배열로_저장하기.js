const solution = (my_str, n) => {
  const answer = [];
  let temp = [];

  my_str.split("").forEach((v, idx) => {
    temp.push(v);
    if ((idx + 1) % n === 0) {
      answer.push(temp.join(""));
      temp = [];
    }
  });
  !!temp.length && answer.push(temp.join(""));

  return answer;
};

// 더 나은 풀이

function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
