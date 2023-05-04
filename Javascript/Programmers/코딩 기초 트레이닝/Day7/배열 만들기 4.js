const solution = (arr) => {
  let i = 0;
  const stk = [];
  while (i < arr.length) {
    if (!stk.length || stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else {
      stk.pop();
    }
  }
  return stk;
};
