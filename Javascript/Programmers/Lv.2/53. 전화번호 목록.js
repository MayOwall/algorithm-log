const isPrefix = (target, comparison) => {
  const reg = new RegExp(`^${target}.*`);
  return !!comparison.match(reg);
};

const solution = (phone_book) => {
  const sortedArr = phone_book.sort();
  for (let i = 0; i < sortedArr.length - 1; i++) {
    const target = sortedArr[i];
    const comparison = sortedArr[i + 1];
    if (isPrefix(target, comparison)) {
      return false;
    }
  }
  return true;
};
