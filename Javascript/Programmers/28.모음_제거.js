const vowels = ["a", "e", "i", "o", "u"];
const solution = (my_string) =>
  my_string
    .split("")
    .filter((v) => !vowels.includes(v))
    .join("");
