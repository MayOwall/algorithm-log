const solution = (myString, pat) => {
  const lastIdx = myString.lastIndexOf(pat) + pat.length;
  return myString.slice(0, lastIdx);
};
