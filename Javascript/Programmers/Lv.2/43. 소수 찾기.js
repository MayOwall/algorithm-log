const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (!(num % i)) return false;
  }
  return true;
};

const solution = (numbers) => {
  let answer = [];
  numbers = numbers.split("");
  const isVisit = Array.from({ length: numbers.length }, () => false);

  const dfs = (i, sum) => {
    if (isPrime(sum * 1) && !answer.includes(sum * 1)) answer.push(sum * 1);
    if (sum.length === numbers.length) return;

    isVisit[i] = true;
    numbers.forEach((num, i) => {
      if (!isVisit[i]) dfs(i, sum + num);
    });
    isVisit[i] = false;
  };

  numbers.forEach((num, i) => dfs(i, num));
  return answer.length;
};
