let [a, b, c, d, e, f] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

//-999에서 999까지 x를 순회한다.
for (let x = -999; x < 1000; x++) {
  // -999에서 999까지 y를 순회한다.
  for (let y = -999; y < 1000; y++) {
    // x와 y를 식에 대입하여 맞는지 확인한다.
    const case1 = a * x + b * y;
    if (case1 !== c) continue;
    const case2 = d * x + e * y;
    if (case2 === f) {
      console.log(`${x} ${y}`);
      return;
    }
  }
}
return;
