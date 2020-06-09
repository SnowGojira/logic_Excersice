// TASK: Implement binary search.
//solution 1

function binarySearch(list, item) {
  let max = list.length - 1;
  let min = 0;

  while (min < max) {
    let mid = Math.floor((min + max) / 2);
    if (item == list[mid]) {
      console.log("mid", mid);
      return mid;
    }
    if (item < list[mid]) max = mid;
    if (item > list[mid]) min = mid + 1;
  }
}

//solution 2
// function binarySearch(list, item, min = 0, max = list.length) {
//   let mid = Math.floor((min + max) / 2);

//   if (item == list[mid]) {
//     console.log("mid", mid);
//     return mid;
//   }
//   if (item < list[mid]) return binarySearch(list, item, 0, mid - 1);
//   if (item > list[mid]) return binarySearch(list, item, mid, max);
// }

binarySearch([2, 6, 7, 90, 103], 90);
