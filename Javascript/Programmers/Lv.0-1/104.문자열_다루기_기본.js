const solution = (s) =>
  s.length !== 4 && s.length !== 6 ? false : /^[0-9]+$/.test(s) ? true : false;
