const solution = (myString, pat) =>
  myString
    .split("")
    .map((v) => (v === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
