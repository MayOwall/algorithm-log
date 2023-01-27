const solution = (numbers, target) => {
  let answer = 0;
  const num = Math.pow(2, numbers.length) - 1;

  for (let i = 0; i <= num; i++) {
    const str = i.toString(2).padStart(numbers.length, "0");
    const sum = numbers.reduce(
      (acc, cur, idx) => (str[idx] === "0" ? acc - cur : acc + cur),
      0
    );
    if (sum === target) answer += 1;
  }

  return answer;
};
