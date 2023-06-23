const solution = (priorities, location) => {
  let cnt = 0;
  const sort = [...priorities].sort((a, b) => b - a);
  priorities = priorities.map((v, i) => [i, v]);

  while (true) {
    const [curIdx, curPriority] = priorities[0];
    if (curPriority === sort[0]) {
      cnt += 1;
      sort.shift();
      priorities.shift();
      if (curIdx === location) return cnt;
    } else {
      priorities = [...priorities.slice(1), priorities[0]];
    }
  }
};
