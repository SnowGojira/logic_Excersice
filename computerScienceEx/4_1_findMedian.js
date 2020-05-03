//需要中位数，
//使用merge方法来寻找。

// function findMedian(arr1, arr2) {
//   let l = arr1.length + arr2.length;
//   let m = Math.floor(l / 2);

//   return merge(arr1, arr2, m);
// }

// function merge(left, right, mid) {
//   let result = [];
//   while (left.length && right.length && result.length <= mid) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//   result = [...result, ...left, ...right];
//   return result[mid];
// }

//传入的两个数组必须排序的
function findMedian(nums1, nums2) {
  return;
}

const array1 = [3, 5, 7, 9];
const array2 = [6, 8, 10, 12];
console.log(findMedian(array1, array2));
