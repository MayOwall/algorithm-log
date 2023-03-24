const inputs = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1)
  .map((v) => {
    const [a, b] = v.split(" ");
    if (!(a % b)) {
      return "multiple";
    } else if (!(b % a)) {
      return "factor";
    } else {
      return "neither";
    }
  });

console.log(inputs.join("\n"));
