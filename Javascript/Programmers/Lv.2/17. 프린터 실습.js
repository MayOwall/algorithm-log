const solution = (p, location) => {
  const l = p.length;
  let f = 0;
  let count = 0;

  while (true) {
    const max = Math.max(...p.slice(f));
    if (p[f] !== max) {
      if (f === location) {
        location += l;
      }
      p.push(p[f]);
      delete p[f];
      f += 1;
    } else {
      count += 1;
      if (f === location) {
        return count;
      } else {
        delete p[f];
        f += 1;
      }
    }
  }
};
