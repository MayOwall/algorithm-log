const solution = (myStrings, parts) =>
  myStrings
    .map((v, i) => v.slice(parts[i][0], parts[i][1] + 1))
    .flat()
    .join("");
