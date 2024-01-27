let [_, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
inputs = inputs.map((v) => v * 1);

const getAverage = (nums) =>
  Math.round(nums.reduce((acc, cur) => acc + cur) / nums.length);

const getMid = (nums) =>
  nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];

const getMax = (nums) => {
  const obj = {};
  nums.forEach((num) => (obj[num] ? (obj[num] += 1) : (obj[num] = 1)));
  const counts = {};
  Object.keys(obj).forEach((v) => {
    const idx = obj[v];
    counts[idx] ? counts[idx].push(v) : (counts[idx] = [v]);
  });

  const results = counts[Math.max(...Object.keys(counts))].sort(
    (a, b) => a - b
  );
  return results.length > 1 ? results[1] : results[0];
};

const getRange = (nums) => {
  const arr = nums.sort((a, b) => a - b);
  const min = arr[0];
  const max = arr[arr.length - 1];
  return max - min;
};

console.log(
  [getAverage(inputs), getMid(inputs), getMax(inputs), getRange(inputs)].join(
    "\n"
  )
);
