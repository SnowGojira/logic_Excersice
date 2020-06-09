// TASK: Implement linear search.
// solution I：
// function linearSearch(list, item) {
//   let result = null;
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] == item) {
//       result = "this iten in the " + i;
//     }
//   }
//   console.log(result);
//   return result;
// }

// solution II：
function linearSearch(list, item, i = 0) {
  if (list[i] == item) {
    console.log("the item in the " + i);
    return i;
  }

  return linearSearch(list, item, i + 1);
}

linearSearch([2, 6, 7, 90, 103], 90);
