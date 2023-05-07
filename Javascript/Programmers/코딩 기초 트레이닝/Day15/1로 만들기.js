const transfer = (num) => {
  let count = 0;
  while (num !== 1) {
    num = num % 2 ? (num - 1) / 2 : num / 2;
    count += 1;
  }
  return count;
};

const solution = (num_list) =>
  num_list.reduce((acc, cur) => acc + transfer(cur), 0);
