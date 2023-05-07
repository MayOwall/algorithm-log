const solution = (myString) =>
  myString
    .split("")
    .map((v) => (v === "a" || v === "A" ? v.toUpperCase() : v.toLowerCase()))
    .join("");
