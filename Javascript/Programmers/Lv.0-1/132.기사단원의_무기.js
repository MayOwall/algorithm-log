const solution = (number, limit, power) => {
  let answer = 1;

  for (let i = 2; i <= number; i++) {
    let sum = 1;
    for (let j = 1; j <= i / 2; j++) {
      if (!(i % j)) sum += 1;
    }
    answer = answer + (sum > limit ? power : sum);
  }

  return answer;
};
