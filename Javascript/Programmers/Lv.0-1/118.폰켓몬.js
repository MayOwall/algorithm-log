// 1
const solution = (nums) =>
  new Set(nums).size < nums.length / 2 ? new Set(nums).size : nums.length / 2;

// 2
const solution2 = (nums) => {
  const typeNum = new Set(nums).size;
  return typeNum < nums.length / 2 ? typeNum : nums.length / 2;
};
