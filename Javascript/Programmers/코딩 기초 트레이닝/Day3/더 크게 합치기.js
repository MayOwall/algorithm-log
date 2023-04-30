const cal = (a, b) => Number(a.toString() + b.toString());

const solution = (a, b) => (cal(a, b) > cal(b, a) ? cal(a, b) : cal(b, a));
