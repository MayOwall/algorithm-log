const solution = (str1, str2) =>
  str1
    .split("")
    .map((v, i) => `${v + str2[i]}`)
    .join("");
