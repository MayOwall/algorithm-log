const solution = (num_list) => {
  let answer = [...num_list];
  const [a, b, ...etc] = num_list.reverse();
  answer.push(a > b ? a - b : a * 2);
  return answer;
};
