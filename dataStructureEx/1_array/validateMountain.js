var validMountainArray = function (nums) {
  let index = 0;
  while (nums[index] < nums[index - 1] && index < nums.length) {
    index++;
  }
  if (index === 0 || index === nums.length - 1) return false;
  while (nums[index] > nums[index - 1] && index < nums.length) {
    index++;
  }

  return index == nums.length - 1;
};
