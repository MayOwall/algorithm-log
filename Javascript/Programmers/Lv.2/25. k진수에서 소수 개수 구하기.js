const isPrime = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (!(num % i)) return false;
  }
  return true;
};

const solution = (n, k) => {
  const str = n.toString(k);
  let arr = [];
  let temp = "";
  for (let i = 0; i < str.length + 1; i++) {
    if (!Number(str[i])) {
      !!temp ? arr.push([temp, i - temp.length, i - 1]) : null;
      temp = "";
    } else {
      temp += str[i];
    }
  }

  arr = arr.filter((v) => Number(v[0]) !== 1 && isPrime(v[0]));

  let answer = 0;

  for (num of arr) {
    const left = str[num[1] - 1];
    const right = str[num[2] + 1];
    if (left === "0" && right === "0") {
      answer += 1;
    } else if (!left && right === "0") {
      answer += 1;
    } else if (left === "0" && !right) {
      answer += 1;
    } else if (!left && !right) {
      answer += 1;
    }
  }

  return answer;
};
