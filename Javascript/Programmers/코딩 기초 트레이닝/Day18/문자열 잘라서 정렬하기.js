const solution = (myString) =>
  myString
    .split("x")
    .filter((v) => !!v)
    .sort();
