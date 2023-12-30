let [n, ...logs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

logs = new Map(logs.map((v) => v.split(" ")));
const result = [];
logs.forEach((v, key) => {
  if (v === "enter") result.push(key);
});

console.log(result.sort().reverse().join("\n"));
