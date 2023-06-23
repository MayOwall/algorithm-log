const solution = (s) => {
  let stack = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? (stack += 1) : (stack -= 1);
    if (stack < 0) return false;
  }
  return !stack;
};
