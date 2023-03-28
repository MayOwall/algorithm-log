const n = require("fs").readFileSync("BaekjoonEx.txt").toString().trim();

console.log(`${(n * (n - 1)) / 2}\n2`);
