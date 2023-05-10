const solution = (arr, flag) => {
  let answer = [];
  arr.forEach((v, i) => {
    if (flag[i]) {
      answer = [...answer, ...Array.from({ length: v * 2 }, () => v)];
    } else {
      answer = answer.slice(0, v * -1);
    }
  });
  return answer;
};
