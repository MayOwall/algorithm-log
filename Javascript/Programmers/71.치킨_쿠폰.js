const solution = (chicken) => {
  let answer = 0;
  let cur = chicken;
  while (true) {
    if (cur < 10) break;

    const num = Math.floor(cur / 10);
    answer += num;
    cur = num + (cur % 10);
  }

  return answer;
};
