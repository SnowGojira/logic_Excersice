//插入式排序
//有两个数组，一个是排序的数组，一个是混乱的数组
//从混乱的数组选择第一个，查找位置插入
// function insertSort(arr) {
//   let array = arr.slice();
//   //外面的是需要排布的右面的部分
//   for (let i = 1; i < array.length; i++) {
//     //里面左面顺序的，目前要进行排序工作
//     for (let j = 0; j < i; j++) {
//       if (array[i] < array[j]) {
//         let sort_item = array.splice(i, 1)[0]; //就算截取一个也是数组
//         array.splice(j, 0, sort_item);
//       }
//     }
//     console.log(i, array);
//   }

//   return array;
// }

function insertSort(nums) {
  return nums;
}
const array = [10, 1, 4, 3, 5, 9, 7, 6, 8, 2];
console.log(insertSort(array));
