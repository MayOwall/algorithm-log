const solution = (a, b) => {
  let curA = a;
  let curB = b;

  while (true) {
    for (let i = 2; i <= Math.min(curA, curB); i++) {
      if (!(curA % i) && !(curB % i)) {
        curA /= i;
        curB /= i;
        continue;
      }
    }
    break;
  }

  while (true) {
    if (!(curB % 2)) {
      curB /= 2;
      continue;
    } else if (!(curB % 5)) {
      curB /= 5;
      continue;
    } else if (curB === 1) {
      return 1;
    } else {
      return 2;
    }
  }
};
