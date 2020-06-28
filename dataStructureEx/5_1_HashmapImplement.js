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

console.log(FindFirstNorepeatChar("a green apple") == "g");
console.log(FindFirstRepeatChar("green apple") == "e");
