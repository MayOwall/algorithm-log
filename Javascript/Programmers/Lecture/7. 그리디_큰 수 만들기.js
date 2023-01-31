const solution = (number, k) => {
  const stack = [];
  let count = 0;

  for (item of number) {
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count++;
    }
    stack.push(item);
  }

  return stack.join("").slice(0, number.length - k);
};
