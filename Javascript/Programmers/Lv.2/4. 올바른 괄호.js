// 1.
const solution = (s) => {
  let stack = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? (stack += 1) : (stack -= 1);
    if (stack < 0) return false;
  }

  return stack ? false : true;
};

// 2.
const solution2 = (s) => {
  let temp = 0;
  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    arr[i] === "(" ? (temp += 1) : (temp -= 1);
    if (temp < 0) return false;
  }
  return !temp;
};
