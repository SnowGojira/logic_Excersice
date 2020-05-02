//快排的算法
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [].concat(quickSort(left), pivot, quickSort(right));
  //return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
console.log(quickSort(array));
