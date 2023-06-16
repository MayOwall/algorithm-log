const solution = (order) => {
  const stack = [];
  let count = 0;

  for (let i = 1; i <= order.length; i++) {
    i === order[count] ? count++ : stack.push(i);

    while (stack.length !== 0 && stack.at(-1) === order[count]) {
      stack.pop();
      count++;
    }
  }

  return count;
};
