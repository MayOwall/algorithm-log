const inputs = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

inputs.forEach((v) => {
  const [a, b, c] = v
    .split(" ")
    .map((v) => v * 1)
    .sort((a, b) => a - b);

  if (a + b <= c) {
    console.log("Invalid");
  } else {
    if (a === b && b === c) {
      console.log("Equilateral");
    } else if (a === b || b === c || a === c) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  }
});
