const solution = (strArr) => {
  const obj = {};
  strArr.forEach((v) =>
    obj[v.length] ? (obj[v.length] += 1) : (obj[v.length] = 1)
  );
  return Math.max(...Object.values(obj));
};
