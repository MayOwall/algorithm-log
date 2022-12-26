const solution = (denum1, num1, denum2, num2) => {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;

  let temp = denum > num ? num : denum;

  outer: while (true) {
    for (let i = 2; i <= temp; i++) {
      if (denum % i === 0 && num % i === 0) {
        denum /= i;
        num /= i;
        temp = denum > num ? num : denum;
        continue outer;
      }
    }
    break;
  }

  return [denum, num];
};
