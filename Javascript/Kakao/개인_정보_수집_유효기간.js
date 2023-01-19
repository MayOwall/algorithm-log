function solution(today, terms, privacies) {
  const answer = [];
  const term = {};

  const getNum = (v) => {
    const [a, b, c] = v.split(".").map((v) => Number(v));
    return (a * 12 + b) * 28 + c;
  };
  const todayNum = getNum(today);

  terms.forEach((v) => {
    const [i, j] = v.split(" ");
    term[i] = Number(j);
  });

  privacies.forEach((v, idx) => {
    const [date, type] = v.split(" ");
    const dateNum = getNum(date);
    const expireNum = dateNum + term[type] * 28;
    if (todayNum >= expireNum) answer.push(idx + 1);
  });

  return answer;
}
