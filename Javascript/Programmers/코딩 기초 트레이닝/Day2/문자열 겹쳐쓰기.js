const solution = (myStr, overStr, s) => {
  const str = myStr.split("");
  overStr.split("").forEach((v, i) => {
    str[i + s] = v;
  });
  return str.join("");
};
