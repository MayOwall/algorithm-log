const solution = (want, number, discount) => {
  let answer = 0;
  outer: for (let i = 0; i < discount.length - want.length; i++) {
    const list = discount.slice(i, i + 10);
    for (let j = 0; j < want.length; j++) {
      const num = list.filter((v) => v === want[j]).length;
      if (num !== number[j]) continue outer;
    }
    answer += 1;
  }

  return answer;
};
