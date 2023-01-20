const solution = (s) => {
  let count = 0;
  let answer = 0;
  while (true) {
    count += 1;
    let stack = 0;
    s.split("").forEach((v) => (v === "0" ? (answer += 1) : (stack += 1)));
    if (stack === 1) {
      break;
    } else {
      s = stack.toString(2);
    }
  }

  return [count, answer];
};
