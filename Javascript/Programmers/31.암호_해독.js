const solution = (cipher, code) =>
  cipher
    .split("")
    .filter((_, idx) => !((idx + 1) % code))
    .join("");
