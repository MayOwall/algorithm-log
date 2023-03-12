const inputs = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .split("\n");

for (let i = 1; i <= inputs[0]; i++) {
  console.log(`${inputs[i][0]}${inputs[i][inputs[i].length - 1]}`);
}
