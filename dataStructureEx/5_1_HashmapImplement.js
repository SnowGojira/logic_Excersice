//JS 中的对象就是hash map
//应用一查找第一个不重复的字母
function FindFirstNorepeatChar(str) {
  //创建hash表来存储str
  //“apple”为例
  //{ a: 1, p: 2, l: 1, 3: 1 }
  let obj = {};
  for (let a of str) {
    if (!obj[a]) {
      obj[a] = 1;
    } else {
      obj[a] += 1;
    }
  }
  //遍历hash找到value = 1的值
  for (let i in obj) {
    if (obj[i] == 1) return i;
  }
}

//应用二找到第一个重复的字母
//使用set来解决
function FindFirstRepeatChar(str) {
  //创建set表
  //set会自动去重
  //apple为例
  //Set { a', 'p', 'l' , 'e' }
  let set = new Set();

  for (let a of str) {
    if (set.has(a)) return a;

    set.add(a);
  }
  //如果没有重复的情况，返回退出码-1
  return -1;
}

//应用三
//计算数组中相差固定差值的对数有几个
//数组的元素都是单独的
//Input: [1, 7, 5, 9, 2, 12, 3] K=2
//Output: 4
//(1,3)(3,5)(5,7)(7,9) return 5
function countPairsWithDiff(array, k) {
  //{1:3,7:9,5:7,9:11,2:4,12:14,3:5}
  let obj = {};
  for (let a of array) {
    obj[a] = a + k;
  }
  let sum = 0;
  for (i in obj) {
    if (array.includes(obj[i])) {
      sum += 1;
    }
  }
  return sum;
}

//应用四
//给定一个数组和目标值，计算出数组中那两个元素加和等于targe的数组位置
//[2,7,12,15] target = 9
//[0,1]
function twoSum(array, k) {
  let obj = {};
  for (let a of array) {
    obj[a] = k - a;
  }
  let indices = [];
  for (i in obj) {
    if (array.includes(obj[i])) {
      indices.push(array.indexOf(obj[i]));
    }
  }
  return indices;
}

//测试部分应都为true
console.log(FindFirstNorepeatChar("a green apple") == "g");
console.log(FindFirstRepeatChar("green apple") == "e");
console.log(countPairsWithDiff([1, 7, 5, 9, 2, 12, 3], 2) == 4);
console.log(twoSum([2, 7, 11, 15], 9));
