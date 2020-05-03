//快排的算法
// function quickSort(arr) {
//   if (arr.length <= 1) return arr;

//   let pivot = arr.pop();
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

function quickSort(nums) {
  if (nums < 1) return nums;

  let pivot = nums[nums.length - 1];
  let right = [];
  let left = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) left.push(nums[i]);
    else right.push(nums[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
console.log(quickSort(array));
