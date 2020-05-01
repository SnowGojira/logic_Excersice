var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] == target) {
          return [i, j];
        }
      }
    }
  }
  return false;
};

console.log(twoSum([11, 2, 15, 7], 9));
