const solution = (operations) => {
  const queue = [];

  operations.forEach((v) => {
    const [order, num] = v.split(" ");
    if (order === "I") {
      queue.push(Number(num));
      queue.sort((a, b) => b - a);
    } else {
      Number(num) === 1 ? queue.shift() : queue.pop();
    }
  });

  if (!queue.length) return [0, 0];
  return [queue[0], queue[queue.length - 1]];
};
