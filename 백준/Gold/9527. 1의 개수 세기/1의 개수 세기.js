const [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => BigInt(v));

let psum = [0];

for (let i = 1; i < 60; i++) {
  psum[i] = 2 ** (i - 1) + 2 * psum[i - 1];
}

psum = psum.map((v) => BigInt(v));

function f(x) {
  x = BigInt(x);
  let count = 0n;
  const binaryNum = x.toString(2);
  const length = binaryNum.length;

  for (let i = 0; i < length; i++) {
    if (binaryNum[i] === "1") {
      const pow = BigInt(length - i - 1);
      count += BigInt(psum[pow]);
      count += x - 2n ** pow + 1n;
      x = x - 2n ** pow;
    }
  }

  return count;
}

console.log((f(B) - f(A - 1n)).toString());
