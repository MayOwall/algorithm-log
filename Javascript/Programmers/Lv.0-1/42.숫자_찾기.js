const solution = (num, k) => {
  const index = String(num).split("").indexOf(String(k));
  return index === -1 ? -1 : index + 1;
};
