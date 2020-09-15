//将O(n2)变成O(n)的复杂度
var removeDuplicates = function (nums) {
  // let index = 0;
  let i = 0;
  let j = 1;
  if (nums.length == 0) {
    return 0;
  }
  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }

  return nums;
};
