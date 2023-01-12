function solution(a, b, n) {
  let answer = 0;
  const calculator = (n) => {
    const newBottle = Math.floor(n / a) * b;
    const leftBottle = n % a;
    answer += newBottle;
    if (newBottle + leftBottle >= a) calculator(newBottle + leftBottle);
  };

  calculator(n);
  return answer;
}
