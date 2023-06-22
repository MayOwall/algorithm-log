const isPrime = (n) => {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) return false;
  }
  return true;
};

const isRightNum = (stack) => {
  const num = stack.join("") * 1;
  return isPrime(num);
};

const getPrimeCount = (n) => {
  let count = 0;
  let stack = [];

  for (let i = 0; i < n.length; i++) {
    if (n[i] === "0") {
      if (!stack.length) continue;
      if (isRightNum(stack)) count += 1;
      stack = [];
    } else {
      stack.push(n[i]);
    }
  }

  if (!!stack.length && isRightNum(stack)) count += 1;

  return count;
};

const solution = (n, k) => {
  n = n.toString(k);

  const answer = getPrimeCount(n);
  return answer;
};
