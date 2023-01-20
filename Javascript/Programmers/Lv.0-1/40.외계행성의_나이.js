const solution = (age) =>
  String(age)
    .split("")
    .map((v) => String.fromCharCode(Number(v) + 97))
    .join("");
