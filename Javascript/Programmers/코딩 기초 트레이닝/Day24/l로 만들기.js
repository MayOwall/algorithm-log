const solution = (myString) =>
  myString
    .split("")
    .map((v) => (v.charCodeAt() < "l".charCodeAt() ? "l" : v))
    .join("");
