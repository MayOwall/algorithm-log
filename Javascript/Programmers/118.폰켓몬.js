const solution = (nums) =>
  new Set(nums).size < nums.length / 2 ? new Set(nums).size : nums.length / 2;
