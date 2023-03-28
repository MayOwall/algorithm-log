const n = require("fs").readFileSync("BaekjoonEx.txt").toString().trim();
const answer = BigInt(n) * BigInt(n) * BigInt(n);

console.log(`${answer}\n3`);
