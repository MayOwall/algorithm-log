const solution = (arr) => {
  let isFirst = false;
  let first;
  let last;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      if (!isFirst) {
        isFirst = true;
        first = last = i;
      } else {
        last = i;
      }
    }
  }
  return isFirst ? arr.slice(first, last + 1) : [-1];
};
