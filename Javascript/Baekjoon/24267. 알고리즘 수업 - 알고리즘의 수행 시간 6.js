const n = require("fs").readFileSync("BaekjoonEx.txt").toString().trim();
const answer = (BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6);

console.log(`${answer}\n3`);
