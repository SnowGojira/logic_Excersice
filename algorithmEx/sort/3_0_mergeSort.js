//归并排序

// function mergeSort(arr) {
//   let array = arr.slice();
//   //为一的数组就是已经sort过的数组
//   if (array.length < 2) return array;

//   let l = array.length;
//   let m = Math.floor(l / 2);
//   let left = array.slice(0, m);
//   let right = array.slice(m, l);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];
//   //其中一个长度为0，就返回数组
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }

//   return [...result, ...left, ...right];
// }

function mergeSort(nums) {
  //return
  if (nums.length < 2) return nums;
  //divide
  let mid = Math.floor(nums.length / 2);

  let left = mergeSort(nums.slice(0, mid));
  let right = mergeSort(nums.slice(mid, nums.length));

  return merge(left, right);
}
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}
const array = [10, 1, 4, 3, 5, 9, 7, 6, 8, 2];
console.log(mergeSort(array));
